import "./Style.css";
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Cardsdata from "./Cardsdata";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action"

const Cards = () => {

    const [data, setData] = useState(Cardsdata);
    // console.log(data);

    const dispatch = useDispatch();

    const send = (e) => {
        // console.log(e); 
        dispatch(ADD(e))

    }

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Add To Cart Project</h2>

            <div className='row d-flex justify-content-center align-items-center'>
                {
                    data.map((elements, id) => {
                        return (
                            <>
                                <Card style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                    <Card.Img variant="top" src={elements.imgdata} style={{ height: "14rem" }} />
                                    <Card.Body>
                                        <Card.Title>{elements.rname}</Card.Title>
                                        <Card.Text>
                                            Price : ₹ {elements.price}
                                        </Card.Text>
                                        <div className="button_div d-flex justify-content-center">
                                            <Button variant="primary" className='col-lg-12'
                                                onClick={() => send(elements)}>Add to Cart</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cards
