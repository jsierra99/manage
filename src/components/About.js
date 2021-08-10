import React from 'react';
import styled, { css } from "styled-components/macro";
import { Button } from './Button';
import bg from "../img/bg-tablet-pattern.svg";

const Section = styled.section`
    background: #fff;
    position: relative;

    p
    {
        color: #B3B4BB;
        line-height: 25px;
        font-size: 1.1rem;
        font-weight: 500;
        text-align: left;
    }
`;

const Container = styled.div`
    max-width: 65%;
    margin: 0 auto;
`;

const BG = styled.img`
    width: 50%;
    position: absolute;
    bottom: -300px;
`; 

const GridAbout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 4rem;
    justify-items: center;
    align-items: center;
    justify-content: center;
`;

const LeftAbout = styled.div`
    z-index: 4;
    
    h1
    {
        color: #232E51;
        font-size: 3rem;
        margin-bottom: 2rem;
    }

    p
    {
        width: 70%;
    }

    @media screen and (max-width: 715px)
    {
        padding: 0 2rem;
        
        p
        {
            width: 100%;
            text-align: center;
        }

        h1
        {
            font-size: 2.1rem;
            text-align: center;
        }
    }
`;

const RightAbout = styled.div`
    z-index: 999;
    padding: 0 .75rem;
    
    h3
    {
        color: #232E51;
        margin-bottom: 1.5rem;
    }

    @media screen and (max-width: 715px)
    {
        h3
        {
            background: #FEEFEB;
            padding: .75rem 2rem;
            border-radius: 5px;
            font-size: 1.1rem;
        }
    }
`;

const FlexOne = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3.5rem;
`;

const Btn = styled(Button)`
    margin: 0 2rem auto 0;
    font-weight: 700;
    font-size: 1.2rem;

    @media screen and (max-width: 715px)
    {
        margin-right: -20px;
        z-index: 99;
    }
`;

const FlexTwo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3.5rem;
`;

const FlexThree = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3.5rem;
`;

const SubRightOne = styled.div``;
const SubRightTwo = styled.div``;
const SubRightThree = styled.div``;

const About = ({ title, paragraphLeft, subTitleOne, subTitleTwo, subTitleThree, subParagraphOne, subParagraphTwo, subParagraphThree }) => 
{
    return (
        <Section>
            <Container>
                <GridAbout>
                    <LeftAbout>
                        <h1>{title}</h1>
                        <p>{paragraphLeft}</p>
                    </LeftAbout>
                    <RightAbout>
                        <FlexOne>
                            <Btn primary="true" big="true" to="/about">01</Btn>
                            <SubRightOne>
                                <h3>{subTitleOne}</h3>
                                <p>{subParagraphOne}</p>
                            </SubRightOne>
                        </FlexOne>
                        <FlexTwo>
                            <Btn primary="true" big="true" to="/about">02</Btn>
                            <SubRightTwo>
                                <h3>{subTitleTwo}</h3>
                                <p>{subParagraphTwo}</p>
                            </SubRightTwo>
                        </FlexTwo>
                        <FlexThree>
                            <Btn primary="true" big="true" to="/about">03</Btn>
                            <SubRightThree>
                                <h3>{subTitleThree}</h3>
                                <p>{subParagraphThree}</p>
                            </SubRightThree>
                        </FlexThree>
                    </RightAbout>
                </GridAbout>
            </Container>
        </Section>
    )
}

export default About
