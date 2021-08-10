import React from 'react';
import styled, { css } from "styled-components/macro";
import { Button } from './Button';
import bg from "../img/bg-tablet-pattern.svg";

const Section = styled.section`
    background: #fff;
    padding: 8rem 0;
    position: relative;

    @media screen and (max-width: 715px)
    {
        padding: 2rem 0;
    }

    h1
    {
        color: #232E51;
        text-align: center;
        font-size: 2.5rem;
        margin-bottom: 6rem;
        z-index: 5;
    }

    p
    {
        color: #B3B4BB;
        line-height: 25px;
        font-weight: 500;
        text-align: center;
    }

    h3
    {
        color: #232E51;
        text-transform: capitalize;
        text-align: center;
        font-size: 1.05rem;
        margin: 1.25rem 0;
    }
`;

const BG = styled.img`
    position: absolute;
    top: -20%;
    z-index: 1;
    left: -15%;

    @media screen and (max-width: 715px)
    {
        display: none !important;
    }
`;

const Container = styled.div`
    max-width: 65%;
    margin: 0 auto;
    z-index: 999;
`;

const GridReviews = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    z-index: 999;


    img
    {
        width: 20%;
        display: block;
        margin: 0 auto;
        position: relative;
        bottom: 30px;
    }
`;

const Btn = styled(Button)`
    display: block;
    max-width: 130px;
    margin: 0 auto;
`;

const ContentOne = styled.div`
    background: #FAFAFA;
    padding: 0 2rem 2.5rem 2rem;
    z-index: 99;
`;

const ContentTwo = styled.div`
    background: #FAFAFA;
    padding: 0 2rem 2.5rem 2rem;
    z-index: 9;
`;

const ContentThree = styled.div`
    background: #FAFAFA;
    padding: 0 2rem 2.5rem 2rem;
    z-index: 9;
`;

const Reviews = ({ title, imageOne, imageTwo, imageThree, nameOne, nameTwo, nameThree, reviewOne, reviewTwo, reviewThree }) => 
{
    return (
        <Section>
            <BG src={bg} />
            <Container>
                <h1>{title}</h1>
                <GridReviews>
                    <ContentOne>
                        <img src={imageOne} alt="anisha" />
                        <h3>{nameOne}</h3>
                        <p>{reviewOne}</p>
                    </ContentOne>
                    <ContentTwo>
                        <img src={imageTwo} alt="bravo" />
                        <h3>{nameTwo}</h3>
                        <p>{reviewTwo}</p>
                    </ContentTwo>
                    <ContentThree>
                        <img src={imageThree} alt="watts" />
                        <h3>{nameThree}</h3>
                        <p>{reviewThree}</p>
                    </ContentThree>
                </GridReviews>
                <Btn primary="true" big={false} path="/careers">Get Started</Btn>
            </Container>
        </Section>
    )
}

export default Reviews
