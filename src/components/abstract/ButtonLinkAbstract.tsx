import React, {ReactElement} from "react";
import { Link } from "react-router-dom";

interface Props {
    buttonClassName?: string;
    nameMenu: ReactElement|string;
    path: string;
}

const ButtonLinkAbstract: React.ComponentType<Props> = (
    {
        buttonClassName,
        nameMenu,
        path
    }) => {

    return (
        <button className={"btn " + buttonClassName ? buttonClassName : ''}>
            <Link to={path}>{nameMenu}</Link>
            <div className="col-md-12 block" />
        </button>
    );
}

export default ButtonLinkAbstract;