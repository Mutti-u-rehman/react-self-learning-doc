
import Search from "./../search/Search";
import RestaurantCard from "../restaurantCard/RestaurantCard";
import { listOfRestaurants } from "../../utils/static-data";
import { useState } from "react";
import "./Body.scss";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(listOfRestaurants);
    return (
        <main className="body">
            <section className="body-intro">
                <p className="eyebrow">GOOD FOOD, GOOD MOOD</p>
                <h1>Find your next<br className="mobile-break" /> favorite bite.</h1>
                <p className="intro-copy">
                    Discover local spots and delicious dishes worth staying in for.
                </p>
                <Search />
            </section>

            <section className="filter-section">
                {/* <Filter /> */}

                <button className="filter-button" type="button" onClick={() => {
                    const topRatedRestaurants = listOfRestaurants.filter(restaurant => restaurant.rating >= 4.7);
                    console.log("Top Rated Restaurants:", topRatedRestaurants);
                    setRestaurantList(topRatedRestaurants);
                }}>
                    Filter Top Rated Restaurants
                </button>
            </section>
            <section className="restaurant-section" id="restaurants">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">HANDPICKED FOR YOU</p>
                        <h2>Popular restaurants</h2>
                    </div>
                    <span className="restaurant-count">{restaurantList.length} places</span>
                </div>
                <div className="restaurant-list">
                    {restaurantList.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Body;