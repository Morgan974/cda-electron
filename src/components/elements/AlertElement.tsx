import React from "react";
import {useSelector} from "react-redux";
import {State} from "../../redux";

interface Props {}

const AlertElement: React.ComponentType<Props> = ({}) => {

    const alert = useSelector((state: State) => state.alert);

    return (
        <>
            {
                alert?.alertData ?
                    <div>
                        {alert.alertData.type} <br/>
                        {alert.alertData.message}
                    </div>
                    :
                    <></>
            }
        </>
    );
}

export default AlertElement;