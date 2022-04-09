import React from "react";
import ButtonLinkMenuElement from "../elements/ButtonLinkMenuElement";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { userActionCreators, alertActionCreators, State} from "../../redux";

const TestPage: React.ComponentType = () => {

    const dispatch = useDispatch();

    const { login, logout } = bindActionCreators(userActionCreators, dispatch);
    const { alertAction } = bindActionCreators(alertActionCreators, dispatch);
    const user = useSelector((state: State) => state.connectedUser);


    return (
        <div className="App">
            <header className="App-header">
                <h1>{ user?.lastname }</h1>
                <h1>{ user?.firstname }</h1>

                <button onClick={() => { alertAction(
                    {
                            type: "alert-success",
                            message: "alert message"
                        }
                    )}
                }>
                    Alert success
                </button>

                <button onClick={() => { alertAction({type : {}})}}>
                    Reset alert
                </button>

                {user?.type === "user-connected" ?
                    <>
                        <button onClick={() => { logout()}}>logout</button>
                        <ButtonLinkMenuElement
                            className="col-md-2"
                            nameMenu={"page 2"}
                            path={"/test-2"}
                        />
                    </>
                    :
                    <button onClick={() => {
                        login({
                            firstname : "TOTO",
                            lastname : "toto",
                            role : "user",
                            email : "toto@gmail.com"
                        })
                    }}>
                        login
                    </button>
                }
            </header>
        </div>
    )
}

export default TestPage;