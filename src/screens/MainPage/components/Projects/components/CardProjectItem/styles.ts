import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${props => props.theme.palette.textAndIcons1};
    border-radius: 16px;
    padding: 16px;
    box-sizing: border-box;
    color: ${props => props.theme.palette.primaryColor};
    width: 440px;
    margin: 16px;
    transition: all 0.2s ease-in-out;

    img {
        width: 120px;
        height: 120px;
        border-radius: 16px;
        margin-right: 10px;
    }

    h1 {
        font-size: 24px;
        margin-bottom: 10px;
        font-family: "Medium"
    }

    p {
        font-size: 16px;
        font-family: "Light";
        margin-bottom: 10px;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.7;
        transform: scale(1.01);
    }
`;