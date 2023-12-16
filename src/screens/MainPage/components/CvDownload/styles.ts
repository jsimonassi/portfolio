import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5%;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    background: linear-gradient( 360deg,  ${props => props.theme.palette.primaryColor},  ${props => props.theme.palette.secondaryColor});

    h1 {
        color: ${props => props.theme.palette.textAndIcons1};
        margin-bottom: 3%;
        font-size: 3rem;
        text-align: left;
        width: 100%;
    }

    p {
        color: ${props => props.theme.palette.textAndIcons1};
        text-align: left;
        width: 100%;
        margin-bottom: 5%;
    }
    
`;