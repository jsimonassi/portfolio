import styled from "styled-components";
import { device } from "../../../../../../assets/styles/deviceSize";

interface InfoBoxProps {
    leftAlign?: boolean;
}

export const Container = styled.div<InfoBoxProps>`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
    margin-top: 2%;
    margin-bottom: 2%;
    background-color: ${props => props.leftAlign ? "transparent" :  "rgba(0, 0, 0, 0.1)"};
    padding: 5%;

    @media ${device.tablet} {
        flex-direction: column;
    }

`;

export const InfoBox = styled.div<InfoBoxProps>`
    display: flex;
    flex-direction: column;
    padding: 3%;
    width: 100%;
    text-align: ${props => props.leftAlign ? "left" : "right"};
    color: ${props => props.theme.palette.textAndIcons1};
    font-family: "light";
    justify-content: space-evenly;

    h1{
        margin-bottom: 3%;
        font-family: "Medium";
    }

    h2 {
        margin-top: 3%;
        margin-bottom: 2%;
    }

    @media ${device.tablet} {
        text-align: left;
        font-size: 0.9rem;
        

        div {
            margin-top: 3%;
            margin-bottom: 1%;
        }
        
    }
`;

export const StoreButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 5%;

    img {
        max-width: 150px;
        object-fit: scale-down;

        &:hover {
        cursor: pointer;
        opacity: 0.8;
     }
    }
`;
