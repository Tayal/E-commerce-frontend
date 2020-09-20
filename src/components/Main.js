import React, { useContext } from 'react'
import { MainContext } from './Store'
import { UncontrolledCarousel } from 'reactstrap';

export default function Main() {

    const {items} = useContext(MainContext);

    return (
        <UncontrolledCarousel items={items} />
    )
}
