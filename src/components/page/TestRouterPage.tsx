import logo from "../../logo.svg";
import React from "react";
import BtnMenueElement from "../Elements/BtnMenuelement";

const TestRouterPage: React.ComponentType = () => {
    return (
        <div className="App">
            <header className="App-header">
                On router
                <BtnMenueElement
                    className="col-md-2"
                    nameMenu={"go back"}
                    path={"/"}
                />
            </header>
        </div>
    )
}

export default TestRouterPage;