import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { motion } from 'framer-motion';

const Container =styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1399px) /2);
    background: #cd853f;
    color: #fff;
`
const Content =styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`
const RentCard =styled(motion.div)`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`

const RentImg =styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
`
const RentHead =styled.h2`
    font-size: clamp(2rem, 2.5vw. 3rem);
    text-align: center;
    margin-bottom: 5rem;
`
const RentTitle =styled.h3`
    font-weight: 400;
    font-size: 1.5rem;
`
const RentInfo =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`
const RentDesc =styled.p`
    margin-bottom: 1rem;
`
const RentPrice =styled.p`
    margin-bottom: 1rem;
    font-size: 1.5rem;
`
const fade = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
}

function Gallery(props) {
    return (
    <Container>
        <RentHead to='/'>{props.header}</RentHead>
        <Content>
            {props.rentData.map((item, index) => (
                <RentCard 
                    to={item.link} 
                    key={index}
                    variants={fade} 
                    initial='hidden' 
                    whileInView='visible' 
                    viewport={{ once: true }} 
                    transition={{ duration: 2 }}
                >
                    <RentImg src={item.image} alt ={item.alt} />
                    <RentInfo>
                        <RentTitle>{item.type}</RentTitle>
                        <RentDesc>{item.location}</RentDesc>
                        <RentPrice>{item.price}</RentPrice>
                        <Button to="/homes" primary={true}>{item.buttonLabel}</Button>
                    </RentInfo>
                </RentCard>
            ))}
        </Content>
    </Container>
    );
}

export default Gallery;