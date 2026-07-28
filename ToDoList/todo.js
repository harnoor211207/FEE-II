(function () {

    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let id = Number(localStorage.getItem("id")) || 0;

    const todocontainer = document.getElementById("todo");

    const todoinput = document.createElement("input");
    todoinput.type = "text";
    todoinput.placeholder = "Enter task...";

    const addbtn = document.createElement("button");
    addbtn.textContent = "ADD";

    const searchbtn = document.createElement("button");
    searchbtn.textContent = "Search";

    const todolist = document.createElement("div");

    const topRow = document.createElement("div");
topRow.style.display = "flex";
topRow.style.alignItems = "center";
topRow.style.gap = "8px";

topRow.append(todoinput, addbtn, searchbtn);

todocontainer.append(topRow, todolist);

    function saveTodos() {
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("id", id);
    }

    function rendertask(todo) {

        const todoitem = document.createElement("div");
        todoitem.className = "todo-item";
        todoitem.style.border = "2px solid red";
        todoitem.style.margin = "10px";

        const p = document.createElement("p");
        p.textContent = todo.text;

        const deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";

        const editbtn = document.createElement("button");
        editbtn.textContent = "Edit";

        editbtn.addEventListener("click", function () {

            const editinput = document.createElement("input");
            editinput.value = todo.text;

            const savebtn = document.createElement("button");
            savebtn.textContent = "Save";

            todoitem.prepend(editinput, savebtn);
            editinput.focus();

            savebtn.addEventListener("click", function () {

                const updatedtask = editinput.value.trim();

                if (!updatedtask) {
                    return;
                }

                todo.text = updatedtask;
                p.textContent = updatedtask;

                saveTodos();

                editinput.remove();
                savebtn.remove();

            });

        });

        deletebtn.addEventListener("click", function () {

            todos = todos.filter(function (t) {
                return t.id !== todo.id;
            });

            saveTodos();
            todoitem.remove();

        });

        todoitem.append(p, deletebtn, editbtn);
        todolist.prepend(todoitem);

    }

    function addtodo() {

        const task = todoinput.value.trim();

        if (!task) {
            return;
        }

        id++;

        const obj = {
            id: id,
            text: task
        };

        todos.unshift(obj);

        saveTodos();

        rendertask(obj);

        todoinput.value = "";
        todoinput.focus();

    }

    addbtn.addEventListener("click", addtodo);

    todoinput.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {
            addtodo();
        }

    });

    searchbtn.addEventListener("click", function () {

        const query = todoinput.value.trim().toLowerCase();

        todolist.innerHTML = "";

        if (!query) {

            todos.forEach(function (todo) {
                rendertask(todo);
            });

        } else {

            const filtered = todos.filter(function (todo) {
                return todo.text.toLowerCase().includes(query);
            });

            filtered.forEach(function (todo) {
                rendertask(todo);
            });

        }

    });

    todos.forEach(function (todo) {
        rendertask(todo);
    });

})();