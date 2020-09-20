import React, { useContext, useState } from 'react';
import { Badge, ModalHeader, Modal, ModalBody, NavLink, Button, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap';
import { MainContext } from './Store';

export default function CartModal() {

    const {cart, dispatch_cart} = useContext(MainContext);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <NavLink onClick={toggle}>
                My Cart <Badge color='danger'>{cart.length}</Badge>
            </NavLink>
            <Modal size="sm" isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Cart</ModalHeader>
                <ModalBody>
                    <ListGroup>
                        {
                            cart.map(item => 
                            <ListGroupItem key={item._id}>
                                <img src={item.src} alt={item.header} style={{height: '50px', width: '50px', marginRight: '10px'}}/>
                                {item.header} <Badge color='success' style={{marginRight: "10px"}}>{item.count}</Badge>
                                <Button size="sm" color="danger" onClick={() => dispatch_cart({type: 'REMOVE_ITEM', payload: item}) }>Remove</Button>
                            </ListGroupItem>)
                        }
                    </ListGroup>
                </ModalBody>
                <ModalFooter>
                    {
                        cart.length ?
                        <Button color="success" onClick={() => {toggle(); dispatch_cart({type: 'CLEAR'})}}>Order</Button>
                        : null
                    }
                </ModalFooter>
            </Modal>
        </div>
    )
}