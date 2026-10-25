import "./RestaurantCard.scss";

const RestaurantCard = ({ restaurant }) => {
    if (!restaurant) {
        return null;
    }

    const { name, cuisine, rating, cloudinaryImageId } = restaurant;

    return (
        <article className="restaurant-card">
            <img
                className="restaurant-image"
                src={cloudinaryImageId || "https://via.placeholder.com/150"}
                alt={name || "Restaurant"}
            />
            <div className="restaurant-details">
                <div className="restaurant-title-row">
                    <h3 className="restaurant-name">{name || "Restaurant Name"}</h3>
                    <span className="restaurant-rating" aria-label={`Rating: ${rating || 4.5} out of 5`}>
                        <span aria-hidden="true">★</span> {rating || 4.5}
                    </span>
                </div>
                <p className="restaurant-cuisine">{cuisine || "Cuisine Type"}</p>
            </div>
        </article>
    );
};

export default RestaurantCard;