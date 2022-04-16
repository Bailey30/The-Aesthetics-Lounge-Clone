import styled, {css} from "styled-components"
import colors from "../../../theme/colors"
import img from "../../../img"

interface ActiveCardProps {
    active?: number | null
    i?: number
    img?: string
}

export const Section = styled.div`
width: 100%;
padding-bottom: 60px;

& .swiper {
    width: 100%;
    /* height: 545px; */
    padding-bottom: 55px;
}
& .swiper-container {
}

& .swiper-slide {
    display: flex;
    justify-content: center;
  }
 & .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: opacity .3s;
    transform: translateZ(0);
    z-index: 10; 
    bottom: 10px;
    left: 0;
    width: 100%;
 }
  & .swiper-pagination-bullet {
    background: ${colors.green2};
    opacity: 0.6;
    width: 9.83px;
    height: 9.83px;
  }

  & .swiper-pagination-bullet-active {
    background: ${colors.green2};
    opacity: 1;
  }

  & .swiper-button-prev {
    height: 40px;
    width: 27px;
    position:absolute ;
    background-image: url(${img.arrow});
    background-repeat: no-repeat;
    background-position: center;
    left: -50px;
    top: 55%;
    transform: scaleX(-1);
    z-index: 10;
    cursor: pointer;
  }

  & .swiper-button-next {
    height: 40px;
    width: 27px;
    position:absolute ;
    background-image: url(${img.arrow});
    background-repeat: no-repeat;
    background-position: center;
    right: -50px;
    top: 55%;
    cursor: pointer;
  }
`

export const Wrapper = styled.div`
width: 1200px;
margin: 0 auto;
position: relative ;
`

export const Bold = styled.span`
font-weight: bold;`

export const SectionTitle = styled.h1`
padding-bottom: 30px;
margin: 0;
line-height: 84%;
color: ${colors.green1};
font-size: 48px;
font-weight: normal;
font-family: forma-djr-banner;
display: flex;
justify-content: center;
`


export const SliderContainer = styled.div``


export const Card = styled.div<ActiveCardProps>`
display: flex;
align-items: center ;
justify-content: center;
margin: 30px;
width: 337.18px;
height: 430.87px;
border-radius: 9.34647px;
border-radius: 10px;
overflow: hidden;
position: relative;
transition: all 0.5s;
transform: ${props=> props.i === props.active && "scale(1.05)"};
box-shadow: ${props=> props.i===props.active && "rgb(123 168 182 / 40%) 0px 31px 35px"};
`

export const ContainerForRevealButton = styled.div<ActiveCardProps>`
margin: 0 auto;
width: 337px;
height: fit-content;
position: relative;
display: flex;
justify-content: center;
overflow: hidden;
&:before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(rgba(250, 250, 250, 0) 0%, rgb(250, 250, 250) 100%);
    position: absolute;
    top: 0px;
    left: 0px;
    background: ${props=> props.i === props.active && "rgba(42, 92, 107, 0.8)"};
}
`

export const BackgroundImage = styled.img<ActiveCardProps>`
border-radius: 10px;
margin: 0 auto;
width:${props=> props.i === props.active ? "345.03px" : "337.17px"};
`
export const InnerCard = styled.div<ActiveCardProps>`
box-sizing: border-box;
margin-top: 20px;
text-align: center;
position: absolute;
width: ${props=> props.i === props.active ? "295px" : "292.73px"};
height: 405px;
color: ${props=> props.i === props.active ? "white" : ` ${colors.green1}`} ;
transform: ${props=> props.i !== props.active ? "translateY(300px)" : "translateY(0)"};
transition: all 0.5s ease 0s;
`

export const Title = styled.h3<ActiveCardProps>`
font-size: 22px;
padding: 0 0 15px;
margin: 0 0 15px;
line-height: 122.5%;
border-bottom: ${props=> props.i === props.active ? "1px solid white" : "none"}
`
export const Line = styled.span<ActiveCardProps>`
width: 100%;
height: 1px;
background: rgb(42, 92, 107);
position: absolute;
bottom: 337px;
left: 0px;
opacity: ${props=> props.i !== props.active ? "1" : "0"};
`

export const DescParagraph = styled.div<ActiveCardProps>`
font-weight: normal;
font-size: 16px;
line-height: 122.5%;
padding-top: 10px;
opacity: ${props=> props.i === props.active ? "1" : "0"};
`

export const Button = styled.button`
border-radius: 22px;
width: 181.07px;
height: 44.38px;
font-weight: 500;
font-size: 18px;
line-height: 131%;
text-align: center;
border: none;
cursor: pointer;
color: ${colors.green1};
position: absolute;
left: 50%;
bottom: 45px;
transform: translateX(-50%);
background: rgb(255, 255, 255);
`

export const RevealButton = styled.div<ActiveCardProps>`
display: flex;
align-items: center;
justify-content: center;   
font-weight: bold;
font-size: 20px;
border-radius: 22.8001px 22.8001px 0px 0px;
position: absolute;
bottom: 0px;
left: 50%;
transform: translateX(-50%);
width: 45.84px;
height: 31.27px;
font-weight: bold;
font-size: 20px;
cursor: pointer;
background: ${props => props.i === props.active ? "rgb(255, 255, 255)" : `${colors.green1}`};
color: ${props => props.i !== props.active ? "white" : `${colors.green1}`} ;`

interface ArrowProps {
    next?: boolean
    prev?: boolean
}

export const Arrow = styled.div<ArrowProps>`
`