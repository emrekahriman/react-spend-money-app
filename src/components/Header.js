import React from 'react'
import {Container, Navbar} from 'react-bootstrap';

export default function Header() {
    return (
        <>
            <Navbar className="header" expand="lg">
                <Container>
                    <Navbar.Brand href="/">EmreKhrmn</Navbar.Brand>
                </Container>
            </Navbar>

            <Container>
                <div className="profile">
                    <img src={"https://avatars.githubusercontent.com/u/59236526?v=4"} alt={"#emrekhrmn"}/>
                    <h3>Spend Bill Gates' Money</h3>
                </div>
            </Container>

        </>
    )
}