import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import { FaBars } from 'react-icons/fa'



const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1 rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: ${({ navBar }) => (navBar ? '#cd853f' : '')};
`
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`
const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`
const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 40px;
        width: 40px;
        cursor: pointer;
        color: #fff;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%)
    }
`;

const NavMenu = styled.i`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Navbar = ({toggle}) => {
    const [navBar, setNavBar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY  >= 80) {
            setNavBar(true)
        }else{
            setNavBar(false)
        }
    } 

    window.addEventListener('scroll', changeBackground);

  return (
    <Nav navBar={navBar}>
    <Logo to='/'>Timbrel global ventures LTD</Logo>
    <MenuBars onClick={toggle}/>
    <NavMenu>
        {menuData.map((item, index) => (
            <NavMenuLinks to={item.link} key={index}>
                {item.title}
            </NavMenuLinks>
        ))}
    </NavMenu>
    <NavBtn>
        <Button to="/contact" primary>
            Contact Us
        </Button>
    </NavBtn>
    </Nav>
  )
}

export default Navbar