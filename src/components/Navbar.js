import React from 'react';

import Navbar from 'react-bulma-components/lib/components/navbar';

import Recompose, { withReducer } from 'recompose';

// Add recompose

const Nav = ({ active, onClick }) =>
    <Navbar>
        <Navbar.Brand>
            <Navbar.Item renderAs="a" href="#">
                <img
                    src="https://bulma.io/images/bulma-logo.png"
                    alt="Bulma: a modern CSS framework based on Flexbox"
                    width="112"
                    height="28" />
            </Navbar.Item>
            <Navbar.Burger
                className={active}
                onClick={onClick} />
        </Navbar.Brand>
        <Navbar.Menu className={active}>
            <Navbar.Container>
                <Navbar.Item href="#">Second</Navbar.Item>
            </Navbar.Container>
            <Navbar.Container position="end">
                <Navbar.Item href="#">At the end</Navbar.Item>
            </Navbar.Container>
        </Navbar.Menu>
    </Navbar>

const showHamburgerMenu = withReducer('active', 'onClick', (active) => active === '' ? active = 'is-active' : active = '');


const mobileNav = showHamburgerMenu(Nav);

export default mobileNav;