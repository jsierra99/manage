import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { navLinks } from '../data/NavLinks';
import logo from "../img/logo.svg";
import ham from "../img/icon-hamburger.svg";

const Navbar = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    height: 100px;
    align-items: center;
    padding: 0 17.5%;
    z-index: 999;
    position: fixed;

    @media screen and (max-width: 715px)
    {
        position: relative;
    }
`;

const Logo = styled.img`
    width: 150px;
    cursor: pointer;

    @media screen and (max-width: 1100px)
    {
        width: 125px;
    }
`;

const NavMenu = styled.div`
    @media screen and (max-width: 1155px)
    {
        display: none; 
    }
`;

const NavMenuLinks = styled(Link)`
    list-style: none;
    display: inline-block;
    text-decoration: none;
    color: #232E51;
    text-transform: capitalize;
    padding-left: 2rem;
    font-weight: 700;
    font-size: .9rem;
`;

const Btn = styled(Button)`
    @media screen and (max-width: 1155px)
    {
        display: none; 
    }
`;

const Ham = styled.img`
    display: none;

    @media screen and (max-width: 1155px)
    {
        cursor: pointer;
        display: ${({show}) => (show ? "none" : "block")};
    }
`;

const Header = ({ toggle, show }) => 
{
    return (
        <Navbar>
            <Logo src={logo}/>
            <NavMenu>
                {navLinks.map((a, b) => (
                    <NavMenuLinks to={a.links} key={b}>
                        {a.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <Btn primary="true" big="true" to="/pricing">get started</Btn>
            <Ham onClick={toggle} show={show} src={ham} alt="hamBar" />
        </Navbar>
    )
}

export default Header
