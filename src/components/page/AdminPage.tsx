import React from "react";
import {Button} from "react-bootstrap";
import AuthApi from "../../config/AuthApi";
import ListBookingElement from "../elements/ListBookingElement";

interface Props {
    isAuthenticated : boolean;
    setIsAuthenticated : (isAuthenticated : boolean) => void;
}

const AdminPage: React.ComponentType<Props> = ({
    isAuthenticated,
    setIsAuthenticated
}) => {

    const handleLogout= () => {
        AuthApi.logout();
        setIsAuthenticated(false);
        window.location.href = '/';
    };

    return (
        <div className="App">
            <div className="d-flex justify-content-end p-2">
                <Button className="btn btn-warning"  onClick={handleLogout}>
                    Déconnexion
                </Button>
            </div>
            <ListBookingElement />
        </div>
    )
}

export default AdminPage;