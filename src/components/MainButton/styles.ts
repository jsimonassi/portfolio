import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.palette.textAndIcons1};
    height: 50px;
    width: 200px;
    
    color: ${props => props.theme.palette.surface3};
    border-radius: 16px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;