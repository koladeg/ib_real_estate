import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { motion } from 'framer-motion';


const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;
const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;
const ColumnLeft = styled.section`
    display: flex;
    flex-direction: column;\justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;
const ColumnRight = styled.section`
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '0' : '1')};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => (reverse ? '0' : '1')};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const fadeIn = {
    hidden: {opacity: 0, y: -100, scale: 1.1},
    visible: {opacity: 1, y: 0, scale: 1}
}

function Content(props) {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                <h1>{props.heading}</h1>
                <p>{props.paragraphOne}</p>
                <p>{props.paragraphTwo}</p>
                <Button to="/homes" primary={true}>{props.buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={props.reverse}>
                <motion.img  variants={fadeIn} initial='hidden' transition={{ duration: 2 }} whileInView='visible' viewport={{ once: true }} src={props.image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
    );
}

export default Content;