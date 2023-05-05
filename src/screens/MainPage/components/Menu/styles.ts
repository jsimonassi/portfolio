import styled from "styled-components";
import { device } from "../../../../assets/styles/deviceSize";

export const Container = styled.div`
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
