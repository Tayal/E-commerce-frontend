import React, { useContext } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Row, Col, Badge, CardSubtitle } from 'reactstrap';
import { MainContext } from './Store';

export default function Home() {

    const {items, cart, dispatch_cart} = useContext(MainContext)
    
    return (
        <div>
            <Row style={{margin: 5, marginTop: 20, marginBottom: 20}}>
            {
                items.map(item => (
                    <Col xs="3" key={item._id} style={{marginBottom: 20}}>
                        <Card>
                            <CardImg height="200" src={item.src} style={{paddingTop: "10px"}} />
                            <hr />
                            <CardBody style={{textAlign: 'center', fontFamily: "sans-serif"}}>
                                <CardTitle style={{fontSize: "3rem"}}>{item.header}</CardTitle>
                                <CardSubtitle>{item.caption}</CardSubtitle>
                                <hr />
                                <Button style={{position: "relative"}} onClick={() => dispatch_cart({type: 'ADD_ITEM', payload: item})}>Add to Cart
                                {
                                    cart.filter(cartItem => cartItem._id === item._id)
                                    .map(cartItem => <Badge color="warning" style={{position: "absolute", top: "-10px", right: "-10px"}}>{cartItem.count}</Badge>)
                                }
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>  
                ))
            }
            </Row>
        </div>
    )
}