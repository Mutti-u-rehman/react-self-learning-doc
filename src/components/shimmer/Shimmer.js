import "./Shimmer.scss";

const Shimmer = () => {
  return (
    <div className="restaurant-shimmer" role="status" aria-label="Loading restaurants">
      <span className="restaurant-shimmer__sr-only">Loading restaurants...</span>
      <div className="restaurant-shimmer__list" aria-hidden="true">
        {Array.from({ length: 8 }, (_, index) => (
          <article className="restaurant-shimmer__card" key={index}>
            <div className="restaurant-shimmer__image" />
            <div className="restaurant-shimmer__content">
              <div className="restaurant-shimmer__title-row">
                <div className="restaurant-shimmer__line restaurant-shimmer__line--title" />
                <div className="restaurant-shimmer__rating" />
              </div>
              <div className="restaurant-shimmer__line restaurant-shimmer__line--subtitle" />
              <div className="restaurant-shimmer__line restaurant-shimmer__line--detail" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;