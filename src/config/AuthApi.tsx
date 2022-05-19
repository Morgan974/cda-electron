import axios from "axios";
import jwtDecode from "jwt-decode";
import {toast} from "react-toastify";
import {AddressApi} from "./GlobalConst";

function setAxiosToken (token : string) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

function setup() {
    const token = window.localStorage.getItem("authToken");

    if(token) {
        const {exp : expiration} : any = jwtDecode(token);

        if((expiration * 1000) > new Date().getTime()) {
            setAxiosToken(token);
            console.log("Connexion établie avec axios !")
        } else {
            logout();
        }
    } else {
        logout();
    }
}

function logout() {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers.common['Authorization'];
    toast.info("Vous êtes désormais déconnecté !");
}

function authenticate(credentials : any, setError : Function, setIsAuthenticated : Function) {
    axios
        .post(AddressApi + "/api/login_check", credentials)
        .then(response => response.data.token)
        .then(token => {
            if(isAdmin(token)) {
                window.localStorage.setItem("authToken", token);
                setAxiosToken(token);
                setError('');
                setIsAuthenticated(true);
                window.location.href = '/admin';
                toast.success("Vous êtes désormais connecté !");
                return true;
            } else {
                console.log("Vous n'avez pas accée à cette application !");
                setError("Vous n'avez pas accée à cette application !")
            }
        })
        .catch(error => setError("Aucun compte ne possède cette adresse email ou les informations ne correspondent pas !"))
    ;
}

function isAuthenticated() {
    const token = window.localStorage.getItem("authToken");

    if(token) {
        const {exp : expiration} : any = jwtDecode(token);

        if((expiration * 1000) > new Date().getTime()) {
            return true
        }

        return false;
    }
    return false;
}

function isAdmin(token : string) {

    if(token) {
        const {roles}: any = jwtDecode(token);
        console.log(roles);

        const roleAdmin = roles.find((element : any) => element === "ROLE_ADMIN");

        return roleAdmin === "ROLE_ADMIN";
    }
}

export default {authenticate, logout, setup, isAuthenticated, isAdmin};