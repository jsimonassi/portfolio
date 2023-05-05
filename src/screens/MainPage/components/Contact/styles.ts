import styled from "styled-components";
import { device } from "../../../../assets/styles/deviceSize";

export const Container = styled.div`
     display: flex;
    flex-direction: column;
    padding: 5%;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    background-color: #000;

    > h1 {
        color: #fff;
        margin-bottom: 3%;
        font-size: 3rem;
        text-align: left;
        width: 100%;
    }

    > div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        > img {
            max-width: 200px;
            max-height: 200px;
            border-radius: 32px;
            object-fit: cover;
        }

        @media ${device.mobileL} {
            flex-direction: column;
            justify-content: center;
            align-items: center;

            > img {
                margin-bottom: 5%;
                max-width: 150px;
                max-height: 150px;
                border-radius: 32px;
                object-fit: cover;
            }
        }
    }
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1%;
    width: 100%;
    text-align: left;
    color: #fff;
    margin-left: 3%;

    h1 {
       color: #fff;
    }

    p {
        color: #fff;
    }

    @media ${device.mobileL} {
        h1 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1rem;
            margin-bottom: 5%;
        }
    }
`;

export const ContactBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1%;

    img {
        max-width: 40px;
        max-height: 40px;
        margin-right: 15px;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
`;