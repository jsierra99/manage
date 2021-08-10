import React from 'react';
import styled, { css } from "styled-components/macro";
import { Button } from './Button';
import bg from "../img/bg-tablet-pattern-contact.svg";

const Section = styled.section`
    background: #F16139;
    position: relative;

    @media screen and (max-width: 890px)
    {
        padding: 5rem 2rem;
    }
`;

const Container = styled.div`
    max-width: 65%;
    margin: 0 auto;
    z-index: 999;

    @media screen and (max-width: 890px)
    {
        max-width: 100%;
    }
`;

const BG = styled.img`
    position: absolute;
    top: 0;
    height: 100%;
    width: 55%;

    @media screen and (max-width: 890px)
    {
        left: -30%;
        top: 30%;
        height: 70%;
    }
`;

const FlexSimplify = styled.div`
    display: flex;
    height: 30vh;
    justify-content: space-between;
    align-items: center;
    z-index: 99;

    @media screen and (max-width: 890px)
    {
        display: flex;
        justify-content: center;
        flex-direction: column;
        z-index: 999;
        margin: 0 auto;

        h1
        {
            margin-bottom: 2rem;
            width: 100% !important;
            text-align: center;
        }
    }

    h1
    {
        color: #fff;
        font-size: 3rem;
        width: 50%;
        font-weight: 500;
        z-index: 9;
    }
`;

const Contact = () => 
{
    return (
        <Section>
            <BG src={bg} />
            <Container>
                <FlexSimplify>
                    <h1>Simplify how your team works today.</h1>
                    <Button big={true} primary={false} path="/community" 
                    css={`background: #fff; color: #F16139; font-weight: 700; box-shadow: none; height: 15%;`}>Get Started</Button>
                </FlexSimplify>
            </Container>
        </Section>
    )
}

export default Contact
