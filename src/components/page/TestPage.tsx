import logo from "../../logo.svg";
import React from "react";
import BtnMenueElement from "../Elements/BtnMenuelement";

const TestPage: React.ComponentType = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <BtnMenueElement
                    className="col-md-2"
                    nameMenu={"page 2"}
                    path={"/test-2"}
                />
            </header>
        </div>
    )
}

export default TestPage;