import img from "../../img"
import styled, { keyframes } from "styled-components"
import colors from "../../theme/colors"

export const Section = styled.div`
position: absolute;
top: 0;
margin: 0 auto;
width: 100%;`

export const Wrapper = styled.div`
height: 145px;
width: 1220px;
margin: 0 auto;
display: flex;
align-items: center;`

const increaseInSize = keyframes`
    0% {
        transform: scale(0);
        left: 50%;
        top: 250%;
      }
    20% {
        transform: scale(1.7) ;
    }
    30%{
        transform: scale(1.55) ;
        left: 50%;
        top: 250%;
    }
    50% {
        transform: scale(1.5); 
        
    }  
    100% {
        transform: scale(1);
        left: 18%;
    }
`

export const Logo = styled.div`
background-image: url(${img.logo});
height: 84px;
min-width: 84px;
background-size: cover;
background-repeat: no-repeat;
position: absolute;
left: 18%;
top: 21%;
z-index: 1001;
animation: ${increaseInSize} 4s;
`

export const LinksContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 130px;
width: 100% ;
height: 37px;
`

interface LinkProps {
    i: number
}

export const Link = styled.div<LinkProps>`
padding-right: 18px;
font-weight: 400;
cursor: pointer;
color: ${props => props.i === 0 && colors.green2};
transition: 0.5s all;
    &:hover {
        color: ${colors.green2};
    }
`

export const PrimaryLinks = styled.div`
display: flex;
`

export const SecondaryLinks = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;`

export const FAQS = styled.div`
cursor: pointer;
transition: 0.5s all;
    &:hover {
        color: ${colors.green2};
    }`

export const ContactUs = styled.div`
cursor: pointer;
margin-left: 21px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 600;
font-size: 16px;
height: 37px;
width: 100px;
color: ${colors.green1};
box-sizing: border-box ;
border: 1px solid ${colors.green1};
transition: all 0.5s;
    &:hover{
        background: rgba(135, 209, 214, 0.3)
}
`

