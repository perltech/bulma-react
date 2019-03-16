import React, { Fragment } from 'react';

import { Field, Control } from 'react-bulma-components/lib/components/form';
import Navbar from 'react-bulma-components/lib/components/navbar';

const colors = {
    Default: '',
    primary: 'primary',
    info: 'info',
    danger: 'danger',
    warning: 'warning',
    success: 'success',
    white: 'white',
    black: 'black',
    light: 'light',
    dark: 'dark',
    link: 'link'
};

const Nav = () => {

    let state = {
        open: 'open'
    }

    return (
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
                    active={state.open}
                    onClick={() => {
                        return state.open ? 'open' : 'closed';
                    }} />
            </Navbar.Brand>
            <Navbar.Menu active={state.open}>
                <Navbar.Container>
                    <Navbar.Item href="#">Second</Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                    <Navbar.Item href="#">At the end</Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
}

export default Nav;