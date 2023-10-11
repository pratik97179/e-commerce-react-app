import { useEffect } from "react";
import PathConstant, { getApiPath } from "../helpers/path.js";
import Header from "./Header.js";
import Navbar from "./Navbar.js";

const BaseApp = () => {
    useEffect(() => {
        getCategories().then((response) => {
            console.log(response);
        });

        async function getCategories() {
            try {
                var result = await fetch(getApiPath(PathConstant.categories));
                var response = await result.json();
                return response;
            } catch (e) {}
        }
    });

    return (
        <div className="base-app-wrapper">
            <Header />
            <Navbar/>
        </div>
    );
};

export default BaseApp;
