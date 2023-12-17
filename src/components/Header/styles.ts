import styled from "styled-components";
import { device } from "../../assets/styles/deviceSize";

interface MenuContainerProps {
    opacity: number;
}

export const MenuContainer = styled.div<MenuContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(24, 24, 24, ${props => props.opacity});
    backdrop-filter: blur(5px);
    height: 80px;
    align-items: center;
    width: 100%;
    padding: 0 50px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    z-index: 10;

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 50%
    }

    p {
        color: ${props => props.theme.palette.textAndIcons1};

        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
    }
`;

export const RightImageStyled = styled.img`
    width: 30px;
    border-radius: 4px;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    @media ${device.tablet} {
        margin-bottom: 10px;
    }
`;

export const Logo = styled.img`
    width: 150px;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

interface HamburguerProps {
    opacity: number;
}

export const HamburguerContainer = styled.div<HamburguerProps>`
    display: flex;
    flex-direction: column;
    background-color: rgba(24, 24, 24, ${props => props.opacity});
    backdrop-filter: blur(5px); 
    width: 100%;
    position: fixed;
    padding: 20px 50px 0 50px;
    box-sizing: border-box;
    z-index: 10;

    p {
        color: ${props => props.theme.palette.textAndIcons1};
        margin-bottom: 10px;

        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
    }  
`;

export const RowView = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

interface HamburguerContentProps {
    isOpen: boolean;
}

export const HamburguerContent = styled.div<HamburguerContentProps>`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    height: ${props => props.isOpen ? "180px" : "0"};
    transition: height 0.5s ease-in-out;
    opacity: ${props => props.isOpen ? 1 : 0};
    transition-delay: ${props => props.isOpen ? "0.5s" : "0s"}, ${props => props.isOpen ? "0s" : "0.5s"};
    transition-property: opacity, height;
`;

