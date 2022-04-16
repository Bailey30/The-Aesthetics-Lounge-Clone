import styled, { css } from "styled-components"
import colors from "../../../theme/colors"

export const Section = styled.div`
padding: 0;
margin: 0;
padding-top: 40px;
padding-bottom: 60px;`

export const Wrapper = styled.div`
width: 1200px;
max-width: 90% ;
display: flex;
margin: 0 auto;
`

export const LeftContainer = styled.div`
box-sizing: border-box;
width: 486.36px;
padding-top: 100px;`

export const TextContainer = styled.div``

export const Title = styled.h3`
padding: 0;
margin: 0;
font-family: forma-djr-banner;
font-weight: bold;
font-size: 48px;
line-height: 84%;
color: rgb(42, 92, 107);`

export const Subtitle = styled.div`
font-weight: normal;
font-size: 18px;
line-height: 131%;
color: rgb(42, 92, 107);
padding-top: 25px;
padding-bottom: 39px;`

export const ButtonContainer = styled.div`
display: flex;
padding-top: 50px;`

interface ButtonProps {
    filled?: boolean;
}

export const Button = styled.button<ButtonProps>`
width: 200.86px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${props => !props.filled && "21px"};
    border: ${props => props.filled ? "none" : `2px solid ${colors.green1}`};
    background: ${props => props.filled ? "rgb(68, 160, 166)" : "none"};
    border-radius: 0px 27.2725px 27.2725px 0px;
    font-weight: 600;
    font-size: 18px;
    line-height: 131%;
    text-align: center;
    color: ${props => props.filled ? "rgb(255, 255, 255)" : `${colors.green1}`};
    cursor: pointer;
    transition: all 0.5s;
    &:hover{
        background: ${props => !props.filled && "rgba(135, 209, 214, 0.3)"};
        box-shadow: ${props => props.filled && `0px 7px 18px ${colors.green3}`};}
        `

export const RightContainer = styled.div`
box-sizing: border-box ;
width: calc(100% - 486.36px);

& .swiper {
    width: 100%;
}

& .swiper-slide {
    box-sizing: border-box ;
    width: 100%;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: end;
}

& .swiper-container {
    box-sizing: border-box;
    position: relative;
    padding: 0;
}
& .swiper-pagination {
    box-sizing: border-box ;
    bottom: 10px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: end;
    padding-right: 40px;
}

& .swiper-pagination-bullet {
    background: ${colors.green2};
    opacity: 0.6;
    width: 9.83px;
    height: 9.83px;
  }

  & .swiper-pagination-bullet-active {
    background: ${colors.green2};
    width: 9.83px;
    height: 9.83px;
    opacity: 1;
  }
`

export const Card = styled.div`
box-sizing: border-box;
width: 582.31px;
min-height: 274.68px;
box-shadow: rgb(123 168 182 / 40%) 0px 15px 35px;
border-radius: 10px;
padding: 30px 45px;
display: flex;
flex-direction: column;
justify-content: space-between;    
`

export const Heading = styled.h3`
margin: 0;
width: 492.3px;
padding-bottom: 11px;
font-weight: bold;
font-size: 24px;
line-height: 131%;
color: rgb(42, 92, 107);`

export const Comment = styled.p`
padding: 0;
margin: 0;
width: 492.3px;
font-weight: normal;
font-size: 16px;
line-height: 131%;
color: rgb(52, 52, 52);
`

export const BottomRow = styled.div`
display: flex;
justify-content: space-between;
padding-top: 30px;
width: 492.3px;`

export const NameAndImage = styled.div`
display: flex;
align-items: center;`

export const Image = styled.img`
`

export const Name = styled.span`
font-weight: bold;
font-size: 16px;
line-height: 131%;
padding-left: 12.33px;
color: rgb(42, 92, 107);`

export const RatingImage = styled.img``