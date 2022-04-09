import React, {ReactElement} from "react";
import { Link } from "react-router-dom";
import ButtonLinkAbstract from "../abstract/ButtonLinkAbstract";

interface Props {
    className?: string;
    nameMenu: ReactElement|string;
    path: string;
}

const ButtonLinkNavbarElement: React.ComponentType<Props> = (
    {
        className,
        nameMenu,
        path
    }) => {

    return (
        <ButtonLinkAbstract
            buttonClassName={"navbar-element " + className ? className : ''}
            nameMenu={nameMenu}
            path={path}
        />
    );
}

export default ButtonLinkNavbarElement;