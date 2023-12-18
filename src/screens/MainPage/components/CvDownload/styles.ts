import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5%;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    background-color: ${props => props.theme.palette.secondaryColor};

   
    > h1 {
        margin-bottom: 3%;
        font-size: 4rem;
        text-align: center;
        width: 100%;
        color: ${props => props.theme.palette.textAndIcons1};
    }

    p {
        color: ${props => props.theme.palette.textAndIcons1};
        text-align: center;
        width: 100%;
        margin-bottom: 5%;
    }
    
`;