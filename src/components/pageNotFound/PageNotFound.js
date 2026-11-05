import "./PageNotFound.scss";
import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
    const err = useRouteError();
    console.error(err);
    return (
        <main className="page-not-found">
            <div className="page-not-found__illustration" aria-hidden="true">
                <span className="page-not-found__plate">
                    <span>404</span>
                </span>
                <span className="page-not-found__fork">⌇</span>
                <span className="page-not-found__spark page-not-found__spark--one">✦</span>
                <span className="page-not-found__spark page-not-found__spark--two">✦</span>
            </div>

            <p className="page-not-found__eyebrow">EMPTY PLATE</p>
            <h1>Looks like this page went missing.</h1>
            <p className="page-not-found__message">
                The page you are looking for does not exist or may have moved.
            </p>
            <a className="page-not-found__button" href="/">
                Back to home
            </a>
        </main>
    );
};

export default PageNotFound;
