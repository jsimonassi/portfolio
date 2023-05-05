import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        border-radius: 16px;
        max-height: 500px;
        max-width: 400px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        transition: 0.5s;

        &:hover {
            max-width: 600px;
            max-height: 600px;
            transition: 0.5s;
        }
    }
`;