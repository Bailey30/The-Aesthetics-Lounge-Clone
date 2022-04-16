import styled from "styled-components"
import colors from "../../theme/colors"

export const Section = styled.div`
background: ${colors.green1};
padding-top: 57px;
padding-bottom: 27px;
min-height: 286.09px;
box-sizing: border-box ;
`

export const Wrapper = styled.div`
width: 1200px;
min-height: 200px;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;`

export const Row = styled.div``

export const Link = styled.a`
cursor: pointer;
text-decoration: none ;
font-size: 16px;
color: white;
padding-right: 18px;
transition: 0.2s all;
&:hover {
    color: ${colors.green2};
}`

export const IconRow = styled.div`
display: flex;
height: 24px;
margin-bottom: 1px;
`

export const Icon = styled.img`
cursor: pointer;
height: 100%;
padding-right: 18px;
transition: 0.2s ;
&:hover {
    transform: translateY(-5px) ;
}`

export const BottomRow = styled.div`
display: flex;
justify-content: space-between;
height: 52.82px;
align-items: center;
justify-self: flex-end ;
`

export const OpopGroup = styled.div`
height: 38px;
line-height: 28px;
display: flex;
align-items: end ;
color: white;
margin-bottom: 1px;
`

export const DevelopedBy = styled.div``

export const Bold = styled.strong``

export const OpopLink = styled.a`
cursor: pointer;
text-decoration: none;
color: white;
position: relative;
display: flex;
align-items: flex-end;
&:before,
&:after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute ;
    left: 0;
    bottom: -5px;
    background-color: white;
}

&:before {
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
}
&:after {
    bottom: -7px;
    transform-origin: 100% 50%;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s 0.1s cubic-bezier(0.2, 1, 0.8, 1);
}

&:hover {
   &:before {
       transform-origin: 0 50%;
        transform: scale3d(1,2, 1);
        transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1)
   } 
   &:after {
       transform-origin: 0 50%;
        transform: scale3d(1,1, 1);
        transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1)
   } 
}
`

export const OpopLogoSmall = styled.img`
width: 32px;
height: 29px;
padding-left: 5px;
padding-right: 5px;
margin-bottom: 2px; ;
`

export const Copyright = styled.div`
color: white;
line-height: 124.1%;
padding-top: 33px;
`

export const TermsAndConditions = styled.div``

export const LogoRow = styled.a`
display: flex;`

export const FooterLogo = styled.img`
width: 117.74px;
height: 117.74px;
position: absolute;
right: 0px;
top: 20px;
display: block;`