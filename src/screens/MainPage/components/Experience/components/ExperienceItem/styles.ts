import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.textAndIcons1};

  h2 {
    color: ${({ theme }) => theme.palette.primaryColor};
    font-family: "Bold"
  }

    p {
        color: ${({ theme }) => theme.palette.textAndIcons2};
        font-family: "Light"
    }

`;

export const CardHeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 10px;
`;

export const CompanyImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`;