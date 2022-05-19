import React, {ReactElement, useEffect, useState} from "react";
import {AddressApi} from "../../config/GlobalConst";
import axios from "axios";
import Moment from "react-moment";
import {Button} from "react-bootstrap";

interface Props {}

const ListBookingElement: React.ComponentType<Props> = (
    {}) => {

    const [book, setBook] = useState<string[]>([]);
    const [body, setBody] = useState<ReactElement>(<></>);

    useEffect(() => {
        axios
            .get(AddressApi + "/api/books")
            .then((response : any) => {
                setBook(response.data);
                console.log(response.data);
            })
        ;
    }, []);

    useEffect(() => {
        if (book?.length > 1) {
            setBody(
                <>
                    {book.map((e : any) => {
                        return (
                            <div className="d-flex align-items-center py-2 m-0 row-background" key={e.id}>
                                <div className="col-md-2 d-flex justify-content-start">
                                    <Moment format="DD/MM/YYYY" date={e.date} />
                                </div>
                                <div className="col-md-4 d-flex justify-content-start">
                                    {e.trek?.name}
                                </div>
                                <div className="col-md-3 d-flex flex-column align-items-start">
                                    {
                                        e.users?.map((users : any) => {
                                            return (
                                                <div className="col-md-12 d-flex justify-content-start" key={users.id}>
                                                    {users?.firstname + ' ' + users?.lastname}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="col-md-3 d-flex justify-content-start button-rounded">
                                    <Button disabled className="m-1"><i className="fas fa-eye" /></Button>
                                    <Button disabled className="m-1"><i className="fas fa-download" /></Button>
                                    <Button disabled className="m-1"><i className="fas fa-envelope" /></Button>
                                </div>
                            </div>
                        )
                    })}
                </>
            );
        }
    }, [book]);

    return (
        <>
            <div className="title">Liste des réservations</div>
            <div className="row m-0 mt-2 nav-list">
                <div className="d-flex align-items-center m-0">
                    <div className="col-md-2 d-flex justify-content-start">Date</div>
                    <div className="col-md-4 d-flex justify-content-start">Trek</div>
                    <div className="col-md-3 d-flex justify-content-start">Client</div>
                    <div className="col-md-3 d-flex justify-content-start">Action</div>
                </div>
            </div>
            <div className="row m-0">
                {body}
            </div>
        </>
    );
}

export default ListBookingElement;