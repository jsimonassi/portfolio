import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    color: ${props => props.theme.palette.textAndIcons1};
    background-color: ${props => props.theme.palette.primaryColor};
    padding-bottom: 5%;

    > h1 {
        margin-top: 5%;
        margin-left: 10%;
        margin-bottom: 3%;
        font-size: 3rem;
        text-align: left;
        width: 100%;
    }

    a {
        color: blueviolet;
    }

    > span {
        margin-left: 2%;
        text-align: center;
    }
`;