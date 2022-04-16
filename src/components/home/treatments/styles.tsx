import styled from "styled-components"
import colors from "../../../theme/colors"

export const Section = styled.div`
position: relative;
top: -100px;
height: 938px;`

export const Wrapper = styled.div`
width: 1135px;
margin: 0 auto;`

export const Title = styled.h1`
margin: 0;
padding-bottom: 46px;
font-size: 50px;
font-family: "forma-djr-banner";
font-weight: 400;
color: ${colors.greyGreen3};
`

export const Bold = styled.span`
font-weight: bold;
padding-left: 7px;`

export const NavImagesContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 1px;`

interface NavSquareProps {
    i: number
    selected: number
}

export const NavSquare = styled.div<NavSquareProps>`
cursor: pointer;
width: 100px;
height: 100px;
overflow: hidden;
position: relative;
filter: ${props => props.i === props.selected ? "drop-shadow(rgba(123, 168, 182, 0.6) 0px 4px 20px)" : "none"};
`

export const NavImage = styled.img`
object-fit: cover;
transform: scale(1.01);
`

export const NavText = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
color: white;
background: rgba(73, 107, 117, 0.8);
position: absolute;
top: 0;
line-height:122% ;
z-index: 101;
    &:hover {
        opacity: 0;
    }
`

export const TextSpan = styled.span`
position: relative;
z-index: 100;
font-size: 15px;
font-weight: 600 ;
line-height: 122.5%;
`

export const TreatmentInfoContainer = styled.div`
padding-top: 56px;
display: flex;`

export const ImageContainer = styled.div`
width: 50%;
`

export const LargeImage = styled.img`
border-radius: 10px;
filter: drop-shadow(rgba(123, 168, 182, 0.4) 0px 31px 35px);
`

export const TextContainer = styled.div`
width: 50%;`

export const InfoTitle = styled.h1`
padding-bottom:44px;
margin: 0;
color: ${colors.green1};
font-size: 39px;
line-height: 122.5%;
font-family: "forma-djr-banner";`

export const Description = styled.div`
padding-bottom: 20px;
font-size: 18px;
font-weight: normal ;
line-height: 122.5%;
color: ${colors.dark};`

export const ButtonContainer = styled.div`
padding-top: 24px;
display: flex;`

interface ButtonProps {
    filled?: boolean;
}

export const Button = styled.button<ButtonProps>`
cursor: pointer;
font-family: Arial, Helvetica, sans-serif;
width: ${props=> props.filled ? "200px" : "274.39px"};
display: flex;
justify-content: center;
align-items:center;
height: 55px;
font-size: 18px;
font-weight: 600;
line-height: 131%;
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

export const TrainingNotice = styled.div`
width: 100%;
height: 172.55px;
margin-top: 108px;
border-radius: 50vw;
display: flex;
align-items: center;
justify-content: center;
font-size: 44px;
font-family: "forma-djr-banner";
color: ${colors.green1};
background: #F4F7F7;
box-shadow: 0px 31px 35px rgba(123, 168, 182, 0.4);
`

