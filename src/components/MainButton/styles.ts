import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 50px;
    width: 200px;
    
    color: #000;
    border-radius: 16px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;