import styled from "styled-components";
import { device } from "../../assets/styles/deviceSize";

interface MenuContainerProps {
    opacity: number;
}

export const MenuContainer = styled.div<MenuContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: rgba(24, 24, 24, ${props => props.opacity});
    backdrop-filter: blur(5px);
    height: 80px;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;

    p {
        color: ${props => props.theme.palette.textAndIcons1};

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