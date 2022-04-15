import styled from "styled-components"
import img from "../../../img"
import colors from "../../../theme/colors"

export const Section = styled.div`
background-image: url(${img.bgHomeHero});
height: 662px;
padding-top: 145px;
background-repeat: no-repeat;
background-position: center ;
background-size: cover ;
&:after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0px;
    width: 100%;
    height: 100vh;
    background: linear-gradient(rgba(250, 250, 250, 0) 75%, rgb(255, 255, 255) 100%);
}
`

export const Wrapper = styled.div`
width: 1220px;
height: 100%;
margin: 0 auto;
`

export const Gradient = styled.div`
`

export const TextContainer = styled.div`
padding-top: 90px ;
width: 678px;
`

export const Title = styled.h1`
margin: 0;
font-size: 50px;
font-family: "forma-djr-banner";
font-weight: 300;
color: ${colors.greyGreen3};
line-height: 122.5%;
`

export const Bold = styled.span`
font-weight: 600;`

export const Text = styled.p`
margin: 0;
padding-top: 25px;
font-size: 18px;
line-height:131%;
color: ${colors.dark};`

export const ButtonContainer = styled.div`
padding-top: 55px;
display: flex;`

interface ButtonProps {
    filled?: boolean;
}

export const Button = styled.button<ButtonProps>`
cursor: pointer;
font-family: Arial, Helvetica, sans-serif;
width: 200.86px;
height: 55px;
font-size: 18px;
font-weight: 600;
border: ${props => props.filled ? "none" : `2px solid ${colors.green1}`};
color: ${props => props.filled ? "white" : colors.green1};
background: ${props => props.filled ? colors.green2 : "none"};
border-radius: 0 50vw 50vw 0;
margin-right: 21px;
transition: all 0.5s;
    &:hover{
        background: ${props => !props.filled && "rgba(135, 209, 214, 0.3)"};
        box-shadow: ${props => props.filled && `0px 7px 18px ${colors.green3}`};
}
`

