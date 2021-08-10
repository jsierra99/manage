import React from 'react';
import styled from "styled-components";
import { Button } from './Button';
import bg from "../img/bg-tablet-pattern.svg";

const Section = styled.section`
    background: #fff;
    padding: 12rem 0;
    position: relative;
    height: 100%;
    max-width: 100%;
    opacity: ${({show}) => (show ? ".5" : "1")};
    background: ${({show}) => (show ? "rgba(0, 0, 0, .35)" : "#fff")};

    @media screen and (max-width: 715px)
    {
        padding: 1rem 0 6rem 0 !important;
    }
`;

const BG = styled.img`
    position: absolute;
    top: -15%;
    right: 5%;
    width: 40%;
    z-index: 2;
`;

const Container = styled.div`
    max-width: 65%;
    margin: 0 auto;
    z-index: 99;
`;

const GridContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 4rem;
    align-items: center;
    justify-content: center;
`;


const LeftContent = styled.div`
    z-index: 99;
    
    h1
    {
        font-size: 3.5rem;
        color: #232E51;
        margin-bottom: 2rem;
    }

    p
    {
        color: #B3B4BB;
        line-height: 25px;
        margin-bottom: 3rem;
        font-size: 1.1rem;
        font-weight: 500;
        text-align: left;
        width: 70%;
    }

    @media screen and (max-width: 715px)
    {
        order: 2;
        padding: 0 2rem;
        
        h1
        {
            font-size: 2.75rem;
            text-align: center;
        }

        p
        {
            text-align: center !important;
            width: 100%;
        }
    }
`;

const RightContent = styled.div`
    z-index: 9;
    max-width: 90%;
    margin: 0 auto;
    padding: 0 2rem;
    
    img
    {
        width: 100%;
    }
`;

const Btn = styled(Button)`
    @media screen and (max-width: 715px)
    {
        display: block;
        margin: 0 auto;
        width: 130px;
    }
`;

const Product = ({ title, paragraph, buttonLabel, image, show }) => 
{
    return (
        <Section show={show}>
            <BG src={bg}/>
            <Container>
                <GridContent>
                    <LeftContent>
                        <h1>{title}</h1>
                        <p>{paragraph}</p>
                        <Btn primary = "true">{buttonLabel}</Btn>
                    </LeftContent>
                    <RightContent>
                        <img src={image} alt="illustration" />
                    </RightContent>
                </GridContent>
            </Container>
        </Section>
    )
}

export default Product
