import React from 'react';
import styled, { css } from "styled-components/macro";
import logo from "../img/logo-footer.svg";
import fb from "../img/icon-facebook.svg";
import yt from "../img/icon-youtube.svg";
import twitter from "../img/icon-twitter.svg";
import pt from "../img/icon-pinterest.svg";
import inst from "../img/icon-instagram.svg";
import { Link } from "react-router-dom";
import { footerLinksOne, footerLinksTwo } from '../data/FooterLinks';
import { Button } from './Button';

const Footers = styled.footer`
    background: #1E1E26;
    padding: 4rem 0;
    height: 100%;
`;

const Container = styled.div`
    max-width: 65%;
    margin: 0 auto;
    height: 100%;

    @media screen and (max-width: 1370px)
    {
        max-width: 100% !important;
    }
`;

const GridFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: .5rem;

    @media screen and (max-width: 1370px)
    {
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
        justify-items: center;
    }
`;

const FooterOne = styled.div`
    position: relative;

    h5
    {
        display: none;
        order: 3;
    }

    @media screen and (max-width: 1370px)
    {
        order: 3;
        display: grid;
        grid-template-columns: 1fr;

        h5
        {
            display: block;
            color: #999A9F;
            font-weight: 500;
            letter-spacing: .25;
            order: 3;
            margin-top: 4rem;
            text-align: center;
        }
    }
`;

const Logo = styled.img`
    cursor: pointer;

    @media screen and (max-width: 1370px)
    {
        order: 2;
        display: block;
        margin: 0 auto;
        width: 180px;
    }
`;

const SocialMedia = styled.div`
    position: absolute;
    bottom: 0;

    img
    {
        margin-right: 1rem;
        cursor: pointer;
        transition: .25s ease-in-out;

        &:hover
        {
            opacity: .7;
        }
    }

    @media screen and (max-width: 1370px)
    {
        position: initial;
        order: 1;
        display: grid;
        grid-template-columns: repeat(5, 40px);
        gap: 2.5rem;
        margin: 0 auto 3rem auto;

        img
        {
            width: 100% !important;
        }
    }
`;

const FootersTwoToThree = styled.div`
    display: flex;
    
    @media screen and (max-width: 1370px)
    {
        order: 2;
        margin-bottom: 3rem;
    }
`;

const FooterTwo = styled.div`
    margin-right: 6rem;
`;

const FooterLinkOne = styled.div``;

const FooterLinksOne = styled(Link)`
    text-decoration: none;
    color: #999A9F;
    display: block;
    list-style: none;
    padding-bottom: 1rem;
    text-transform: capitalize;
    font-weight: 500;
    transition: .25s ease-in-out;

    &:nth-child(4)
    {
        padding: 0;
    }

    &:hover
    {
        opacity: .5;
    }
`;

const FooterThree = styled.div`

    @media screen and (max-width: 1370px)
    {
        //order: 2;
    }
`;

const FooterLinkTwo = styled.div``;

const FooterLinksTwo = styled(Link)`
    text-decoration: none;
    color: #999A9F;
    display: block;
    list-style: none;
    padding-bottom: 1rem;
    text-transform: capitalize;
    font-weight: 500;
    transition: .25s ease-in-out;

    &:nth-child(3)
    {
        padding: 0;
    }

    &:hover
    {
        opacity: .5;
    }
`;

const FooterFour = styled.div`
    position: relative;

    @media screen and (max-width: 1370px)
    {
        order: 1;
        margin-bottom: 3rem;
    }
`;

const InboxUpdates = styled.div`
    display: flex;
    
    input
    {
        padding: 1rem;
        outline: none;
        border: none;
        border-radius: 30px;
        margin-right: .5rem;

        &::placeholder
        {
            opacity: .7;
            font-weight: 700;
        }
    }
`;

const Credits = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;

    h5
    {
        color: #999A9F;
        font-weight: 500;
        letter-spacing: .25;
    }

    @media screen and (max-width: 1370px)
    {
        display: none;
    }
`;

const Footer = () =>
{
    return (
        <Footers>
            <Container>
                <GridFooter>
                    <FooterOne>
                        <Logo src={logo}  alt="logo" />
                        <SocialMedia>
                            <img src={fb} alt="facebook" />
                            <img src={yt} alt="youtube" />
                            <img src={twitter} alt="twitter" />
                            <img src={pt} alt="pinterest" />
                            <img src={inst} alt="instagram" />
                        </SocialMedia>
                        <h5>Copyright 2021. All Rights Reserved</h5>
                    </FooterOne>
                    <FootersTwoToThree>
                        <FooterTwo>
                            <FooterLinkOne>
                                {footerLinksOne.map((x, y) => (
                                    <FooterLinksOne to={x.links} key={y}>
                                        {x.title}
                                    </FooterLinksOne>
                                ))}
                            </FooterLinkOne>
                        </FooterTwo>
                        <FooterThree>
                            <FooterLinkTwo>
                                {footerLinksTwo.map((a, b) => (
                                    <FooterLinksTwo to={a.links} key={b}>
                                        {a.title}
                                    </FooterLinksTwo>
                                ))}
                            </FooterLinkTwo>
                        </FooterThree>
                    </FootersTwoToThree>
                    <FooterFour>
                        <InboxUpdates>
                            <input type="text" placeholder="Updates in your inbox..." />
                            <Button primary={true} big={true} css={`box-shadow: none;`}>Go</Button> 
                        </InboxUpdates>
                        <Credits>
                            <h5>Copyright 2021. All Rights Reserved</h5>
                        </Credits>
                    </FooterFour>
                </GridFooter>
            </Container>
        </Footers>
    )
}

export default Footer
