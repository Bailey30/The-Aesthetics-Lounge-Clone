import styled, {css} from "styled-components"
import colors from "../../../theme/colors"
import img from "../../../img"

export const Section = styled.div`
padding-top: 73px;
padding-bottom: 96px;
background: #F4F7F7;`

export const Wrapper = styled.div`
width: 1200px;
margin: 0 auto;
`

export const TextContainer = styled.div`
width: 600px;
padding-bottom: 57px;;
margin: 0 auto;
text-align: center ;
`

export const Title = styled.h1`
font-family: "forma-djr-banner";
font-weight: 400;
font-size: 48px;
color: ${colors.green1};
padding: 0;
margin: 0;
line-height: 84%;`

export const Bold = styled.span`
font-weight: bold;`

export const Subtext = styled.div`
font-weight: normal;
font-size: 18px;
line-height: 131%;
text-align: center;
color: rgb(42, 92, 107);
padding-top: 25px;`

export const ImageRow = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin: 0 auto;

`
interface ImageProps {
    img: string
}

export const ImageContainer = styled.a<ImageProps>`
${(props: ImageProps)=> 
   css`
    background-image: url(${props.img});
    `
}
position: relative;
height: 251.6px;
width: 251.6px;
border-radius: 10px;
cursor: pointer;
box-sizing: border-box ;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${colors.green2};
        opacity: 0;
        border-radius: 10px;
        transition: 0.5s all;
    };
    &:after {
        content: "";
        position: absolute;
        height: 35px;
        width: 35px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-image: url(${img.socialsInstagramWhite});
        background-size: cover ;
        background-repeat:no-repeat ;
        z-index: 10;
        opacity: 0;
        transition: 0.5s all;
    }
    &:hover {
        &:before {
            opacity: .8;
        }
        &:after {
            opacity: 1
        }
    }
`