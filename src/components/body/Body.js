
import Search from "./../search/Search";
import RestaurantCard from "../restaurantCard/RestaurantCard";
import { restaurantsApiUrl } from "../../utils/constants";
import { useEffect, useState } from "react";
import "./Body.scss";
import Shimmer from "../shimmer/Shimmer";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [restaurantList, setRestaurantList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    // useEffect(() => {
    //     const controller = new AbortController();

    //     const loadRestaurants = async () => {
    //         try {
    //             const response = await fetch(restaurantsApiUrl, {
    //                 signal: controller.signal,
    //             });
    //             if (!response.ok) {
    //                 throw new Error(`Request failed (${response.status})`);
    //             }

    //             const restaurants = await response.json();
    //             if (!Array.isArray(restaurants)) {
    //                 throw new Error("The restaurant API returned an invalid response.");
    //             }

    //             setAllRestaurants(restaurants);
    //             setRestaurantList(restaurants);
    //         } catch (fetchError) {
    //             if (fetchError.name !== "AbortError") {
    //                 setError(fetchError.message || "Could not load restaurants.");
    //             }
    //         } finally {
    //             if (!controller.signal.aborted) {
    //                 setIsLoading(false);
    //             }
    //         }
    //     };

    //     loadRestaurants();
    //     return () => controller.abort();
    // }, []);


    useEffect(() => {
        const fetchRestaurants = async() =>{
            
            const data = await fetch(restaurantsApiUrl);
            const json = await data.json();
            setAllRestaurants(json);
            setRestaurantList(json);
            setIsLoading(false);
        } 

        fetchRestaurants();
    }, []);

    const handleSearch = (searchInput) => {
        const filteredRestaurants = allRestaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setRestaurantList(filteredRestaurants);
    }

    return (
        <main className="body">
            <section className="body-intro">
                <p className="eyebrow">GOOD FOOD, GOOD MOOD</p>
                <h1>Find your next<br className="mobile-break" /> favorite bite.</h1>
                <p className="intro-copy">
                    Discover local spots and delicious dishes worth staying in for.
                </p>
                <Search onSearch={handleSearch} />
            </section>

            <section className="filter-section">
                {/* <Filter /> */}

                <button className="filter-button" type="button" onClick={() => {
                    const topRatedRestaurants = allRestaurants.filter(restaurant => restaurant.rating >= 4.7);
                    setRestaurantList(topRatedRestaurants);
                }} disabled={isLoading || Boolean(error)}>
                    Filter Top Rated Restaurants
                </button>
            </section>
            <section className="restaurant-section" id="restaurants">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">HANDPICKED FOR YOU</p>
                        <h2>Popular restaurants</h2>
                    </div>
                    <span className="restaurant-count">
                        {isLoading ? "Loading..." : `${restaurantList.length} places`}
                    </span>
                </div>
                {error ? (
                    <p role="alert">Unable to load restaurants: {error}</p>
                ) : (
                    <div className="restaurant-list">
                        {restaurantList.map((restaurant) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))}

                        {isLoading && (
                            <Shimmer />
                        )}
                    </div>
                )}
            </section>
        </main>
    );
};

export default Body;