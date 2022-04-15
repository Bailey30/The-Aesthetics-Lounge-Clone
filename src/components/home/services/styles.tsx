import styled, { css } from "styled-components"
import colors from "../../../theme/colors"
import {Field} from "formik"
 
interface FormProps {
    row?: boolean
    message?: boolean
    validation?: any
    $active?: any
    
}

export const Section = styled.div`
padding-bottom: 94px;`

export const Wrapper = styled.div`
width: 692.36px;
margin: 0 auto;`

export const Heading = styled.h3`
margin: 0;
font-family: forma-djr-banner;
font-weight: normal;
font-size: 48px;
line-height: 84%;
text-align: center;
color: ${colors.green1};
padding-bottom: 55px;`

export const Bold = styled.span`
font-weight: bold;`

export const Row = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: 35px;`

export const InputContainer = styled.div<FormProps>`
position: relative;
width: 332.33px;
${(props: any) =>
        props.row &&
        css`
      width: 100%;
    `}
    ${(props: any) =>
        props.message &&
        css`
      height: 109.34px;
      width: 100%;
    `}
`

export const PlaceHolder = styled.span<FormProps>`
box-sizing: border-box ;
font-weight: normal;
font-size: 18px;
line-height: 84%;
color: ${colors.green1};
font-family: proxima-nova;
width: 100%;
height: 53.52px;
padding: 0px 21px;
pointer-events: none;
position: absolute;
left: 0px;
top: 20px;
transition: all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0s;

${(props: any) =>
        props.$active &&
        css`
            transform: translateY(-70%) translateX(-20px);
            font-size: 14px;
    `}
`

export const Input = styled(Field)<FormProps>`
width: 100%;
height: 53.52px;
box-sizing: border-box;
border-radius: 10px;
padding: 0px 21px;
font-weight: normal;
font-size: 18px;
line-height: 84%;
color: rgb(42, 92, 107);
outline: none;
resize: none;
/* background: rgb(255, 229, 239); */
border: 2px solid ${colors.green1};
box-shadow: rgb(255 0 101 / 15%) 0px 2px 10px 0px;

    &::placeholder {
        opacity: 0
    }

    ${(props: any) =>
        props.message &&
        css`
        /* box-sizing: border-box ; */
      height: 109.34px;
      padding-top: 19.26px;
      width: 100%;
    `}

    ${(props: any) =>
        props.validation && !props.$active &&
        css`
      background: ${colors.red2};
      border: solid 2px ${colors.red1};
      box-shadow: 0 2px 10px 0 rgba(255, 0, 101, 0.15);
    `}

    &:focus + ${PlaceHolder} {
            transform:  translateY(-70%) translateX(-20px);
            font-size: 14px;
        }
    
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
padding-top: 10px;`

export const Button = styled.button`
width: 350.29px;
height: 55px;
display: inline-flex;
align-items: center;
justify-content: center;
background: ${colors.green2};
border-radius: 0px 27.2725px 27.2725px 0px;
font-weight: 600;
font-size: 18px;
line-height: 131%;
text-align: center;
color: white;
border: none;
cursor: pointer;
`