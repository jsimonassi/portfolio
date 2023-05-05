import styled, { keyframes } from "styled-components";
import { device } from "../../../../assets/styles/deviceSize";

const colors = keyframes`
    0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
   
        }
        100% {
            background-position: 0% 50%;
        }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    background: conic-gradient(from 3.1416rad at 10% 50%, #243723, #2A2B2A);
    background-size: 102% 100%;
    animation: ${colors} 15s ease infinite;

    @media ${device.mobileL} {
        background: conic-gradient(from 120deg at 20% 10%, #243723, #2A2B2A);
    }
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding-left: 20%;
    padding-right: 30%;
    box-sizing: border-box;

    h1 {
        font-size: 5rem;
        color: #fff;
        transition: 0.5s;

        &:hover {
            font-size: 5.5rem;
            transition: 0.5s;
        }
    }

    h3 {
        font-size: 2.5rem;
        color: #fff;
        font-weight: 400;
        transition: 0.5s;
        height: 45px;


        &:hover {
            font-size: 2.8rem;
            transition: 0.5s;
        }
    }

    p{
        color: #fff;
    }

    @media ${device.tablet} {
        padding-left: 10%;
        padding-right: 10%;
    }

    @media ${device.mobileL} {
        padding-left: 5%;
        padding-right: 5%;

        h1 {
            font-size: 3rem;
        }

        h3 {
            font-size: 2rem;
        }

        p {
            text-align: justify;
            font-size: 0.8rem;
        }
    }

`;

export const MiniHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding: 25px;
    box-sizing: border-box;

    p {
        color: #fff;

        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
    }
`;

export const MiniFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 25px;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    img {
        max-width: 40px;
    }
`;



export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: #000;
    height: 80px;
    align-items: center;
    width: 100%;

    p {
        color: #fff;

        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
    }

    @media ${device.mobileL} {
        flex-direction: column;
        height: 200px;
    }
`;
