import styled, { keyframes } from "styled-components"
import colors from "../../../theme/colors"

export const bg = keyframes`
    0%{
        opacity: 1;
        background: radial-gradient(50% 50% at 50% 50%, ${colors.greyGreen1} 0%, ${colors.greyGreen2} 100%);
        position: fixed;
    }
    30% {
        opacity: 1;
        background: radial-gradient(50% 50% at 50% 50%, ${colors.greyGreen1} 0%, ${colors.greyGreen2} 100%);
    }
    40% {
        opacity: 1;
        background: radial-gradient(50% 50% at 50% 50%, ${colors.white} 0%, ${colors.white} 100%);
        position: fixed;
    }
    100% {
        opacity: 0;
        position: inherit;
    }
`;

export const svg = keyframes`
    0% {
        transform: scale(2.5);
        left: 50%;
        top:45%;
    }
    50% {
        transform: scale(2.5);
        left: 50%;
        top:45%;
    }
    90% {
        transform: scale(1);
    }
    100% {
        transform: scale(1);
        left: 18%;
        top:3.25%;
    }
`;

export const link = keyframes`
    0% {
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }
    80% {
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }
    100% {
        transform: translate(0, 0);
        left: 0;
        top: 30px;
    }
`;

export const left = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-250%) rotate(-15deg);
    }
    100% {
        opacity: 1;
        transform: translateX(0) rotate(0deg);
    }
`;

export const right = keyframes`
    0% {
        opacity: 0;
        transform: translateX(200%) rotate(10deg);
    }
    100% {
        opacity: 1;
        transform: translateX(0) rotate(0deg);
    }
`;

export const circle = keyframes`
    0%{
        opacity: 0;
        transform: scale(0.5);
        transform-origin: center;
    }
    75% {
        opacity: 0;
    }
    80% {
        opacity: 1;
        transform: scale(0.5);
        transform-origin: center;
    }
    90% {
        transform: scale(1.1);
        transform-origin: center;
    }
    100% {
        opacity: 1;
        transform: scale(1);
        transform-origin: center;
    }
`;

export const OpeningBackground = styled.div`
position:fixed;
width:100%;
height:100%;
top:0px;
left:0px;
z-index:1000;
-webkit-animation: ${bg} 10s;`

export const Svg = styled.svg`
overflow: inherit;
transform: scale(2.5);
-webkit-animation: ${svg} 8s;
animation-fill-mode: forwards;
position: absolute ;
z-index: 1002;
left: 15%;
top:3%;
`;

export const Left = styled.g`
-webkit-animation: ${left} 3s;
animation-fill-mode: forwards;
position: relative ;
z-index: 1002;
`;

export const Right = styled.g`
-webkit-animation: ${right} 3s;
animation-fill-mode: forwards;
position: relative ;
z-index: 1002;
`;

export const Circle = styled.g`
-webkit-animation: ${circle} 4s;
opacity: 0;
transform: scale(0.5);
transform-origin: center;
animation-fill-mode: forwards;
position: relative ;
z-index: 1002;
`;