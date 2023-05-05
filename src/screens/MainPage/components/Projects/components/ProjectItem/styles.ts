import styled from "styled-components";
import { device } from "../../../../../../assets/styles/deviceSize";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 2%;
    margin-bottom: 2%;

    @media ${device.tablet} {
        flex-direction: column;
    }

`;

interface InfoBoxProps {
    leftAlign?: boolean;
}

export const InfoBox = styled.div<InfoBoxProps>`
    display: flex;
    flex-direction: column;
    padding: 3%;
    width: 100%;
    text-align: ${props => props.leftAlign ? "left" : "right"};
    color: #fff;
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
