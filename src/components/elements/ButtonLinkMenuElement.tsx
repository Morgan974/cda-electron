import React, {ReactElement} from "react";
import ButtonLinkAbstract from "../abstract/ButtonLinkAbstract";

interface Props {
    className?: string;
    nameMenu: ReactElement|string;
    path: string;
}

const ButtonLinkMenuElement: React.ComponentType<Props> = (
    {
        className,
        nameMenu,
        path
    }) => {

    return (
        <ButtonLinkAbstract
            buttonClassName={"menu-element " + className ? className : ''}
            nameMenu={nameMenu}
            path={path}
        />
    );
}

export default ButtonLinkMenuElement;