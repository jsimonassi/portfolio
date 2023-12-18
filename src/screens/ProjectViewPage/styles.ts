import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 200vh;
    background: linear-gradient( 160deg,  ${props => props.theme.palette.primaryColor},  ${props => props.theme.palette.secondaryColor});
    align-items: center;

    > h1 {
        margin-top: 100px;
        margin-bottom: 3%;
        font-size: 4rem;
        text-align: center;
        width: 100%;
        color: ${props => props.theme.palette.textAndIcons1};
    }

    h2 {
        color: ${props => props.theme.palette.textAndIcons1};
        font-family: "Light"
    }
`;

export const PreviewContainer = styled.div `
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 350px;
`;

export const ImgCover = styled.img`
    height: 600px;
    width: 300px;
    position: absolute;
`;

export const ImgContent = styled.img`
    height: 600px;
    width: 300px;
    position: absolute;
    border-radius: 30px;
    padding: 10px;
    box-sizing: border-box;
    object-fit: cover;
    object-position: top;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    color: ${props => props.theme.palette.textAndIcons1};
    text-align: center;
    margin-top: 380px;
    padding: 10px;

    p {
        font-family: "Light"
    }
`;
