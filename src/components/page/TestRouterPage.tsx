import React from "react";
import ButtonLinkMenuElement from "../elements/ButtonLinkMenuElement";

const TestRouterPage: React.ComponentType = () => {
    return (
        <div className="App">
            <header className="App-header">
                On router
                <ButtonLinkMenuElement
                    className="col-md-2"
                    nameMenu={"go back"}
                    path={"/"}
                />
            </header>
        </div>
    )
}

export default TestRouterPage;