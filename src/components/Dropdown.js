import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { navLinks } from '../data/NavLinks';
import close from "../img/icon-close.svg";

const Container = styled.div`
    position: fixed;
    width: 90%;
    height: 370px;
    margin: 0 auto;
    background: #fff;
    z-index: 999;
    top: 110px;
    left: 5%;
    border-radius: 8px;
    transition: .5s ease-in-out;
    display: ${({show}) => (show ? "block" : "none")};
`;

const Close = styled.img`
    width: 25px;
    position: absolute;
    right: 14%;
    top: -4.5rem;
    cursor: pointer;
`;

const Menu = styled.div``;

const MenuLinks = styled(Link)`
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    font-weight: 700;
    color: #232E51;
    font-size: 1.1rem;
    transition: .5s ease-in-out;

    &:nth-child(1)
    {
        padding-top: 4rem;
    }

    &:hover
    {
        opacity: .7;
    }
`;


const Dropdown = ({ show, toggle }) => 
{
    return (
        <Container show={show} onClick={toggle}>
            <Close src={close} onClick={toggle} />
            <Menu>
                {navLinks.map((item, index) => (
                    <MenuLinks to={item.Link} key={index}>
                        {item.title}
                    </MenuLinks>
                ))}
            </Menu>
        </Container>
    )
}

export default Dropdown
