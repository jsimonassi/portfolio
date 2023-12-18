import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.palette.textAndIcons1};
    background-color: ${props => props.theme.palette.primaryColor};
    padding-bottom: 5%;

    > h1 {
        margin-top: 5%;
        margin-bottom: 3%;
        font-size: 4rem;
        text-align: center;
        width: 100%;
        color: ${props => props.theme.palette.textAndIcons1};
    }

    a {
        color: blueviolet;
    }

    > span {
        margin-left: 2%;
        text-align: center;
    }
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 3%;
    margin-bottom: 5%;
    max-width: 1500px;
`;