function Card(props) {
    return (
        <div className="card">
            <div className="card-content">

                <img
                    className="product-image"
                    src={props.image}
                    alt={props.name}
                />

                <h3>{props.name}</h3>

                <p className="description">
                    {props.description}
                </p>

                <p className="price">
                    {props.price}
                </p>

                <p className={props.available ? "available" : "unavailable"}>
                    {props.available ? "✓ Available" : "✕ Out of Stock"}
                </p>

                <div className="buttons">

                {props.available && (
                    <button className="buy-btn">
                        {props.buy}
                    </button>
                )}

                <button
                    className="cart-btn"
                    disabled={!props.available}
                >
                    {props.available ? "Add to Cart" : "Out of Stock"}
                </button>
            </div>
            </div>
        </div>
    )
}
export default Card