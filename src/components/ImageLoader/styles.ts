import styled from "styled-components";

export const Container = styled.div`

    img {
        border-radius: 16px;
        max-height: 500px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        transition: 0.5s;

        &:hover {
            max-height: 600px;
            transition: 0.5s;
        }
    }
`;