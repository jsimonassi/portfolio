import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const MiniFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 25px;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }

    img {
        max-width: 40px;
    }
`;