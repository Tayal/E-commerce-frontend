import React, { useState, useContext } from 'react'
import { NavLink, ModalHeader, ModalBody, Modal, FormGroup, Form, Label, Input, ModalFooter, Button, Alert } from 'reactstrap'
import { MainContext } from './Store';
const axios = require('axios');

export default function SignupModal() {

    const {user, dispatch_user} = useContext(MainContext);

    const [localUser, setUser] = useState({});
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
        setUser({});
        dispatch_user({
            type: 'AUTH_FAIL',
            payload: null
        })
    }

    const authActions = () =>{
        axios.post('/auth/signup', JSON.stringify(localUser), {headers: {'Content-type': 'application/json'}})
        .then(res => {
            dispatch_user({
                type: 'SIGNUP',
                payload: res.data.name
            })
        })
        .catch(err => {
            dispatch_user({
                type: 'AUTH_FAIL',
                payload: err.response.data.err
            })
        })
    }

    return (
        <div>
            <NavLink onClick={toggle}>Signup</NavLink>
            <Modal className="modal-dialog-centered" isOpen={modal} toggle={toggle}>
                <ModalHeader>Enter Credentials</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="name" name="name" id="name" placeholder="Saurav" onChange={(e) => setUser({...localUser, name: e.target.value})} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="saurav@gmail.com" onChange={(e) => setUser({...localUser, email: e.target.value})} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input type="password" name="password" id="password" placeholder="6 characters minimum" onChange={(e) => setUser({...localUser, password: e.target.value})} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter className="justify-content-between">
                    <Button color="primary" onClick={() => {authActions()}}>SignUp</Button>
                    {
                        user.err ?
                        <Alert color="danger">
                            {user.err}
                        </Alert>
                        : null
                    }
                </ModalFooter>
            </Modal>
        </div>
    )
}
