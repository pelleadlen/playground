import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.flexStart ? "flex-start" : "center")};

  padding: ${(props) => (props.noPadding ? "0" : "2em")};
  border-radius: 1.5rem;

  box-shadow: ${(props) => props.theme.shadow}; ;
`;

export const SpaceBetween = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;

  ul {
    list-style: disc;
    margin-top: 1rem;
    @media (max-width: 932px) {
      margin-bottom: 2rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  max-width: 900px;
  gap: 1rem;
  margin: auto;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media (max-width: 932px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin: 1rem;
  }
`;

export const Name = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  padding-bottom: 0.1rem;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Qa = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Status = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.textGray};
`;
export const Li = styled(Status)`
  color: ${(props) => props.theme.textGray};
`;
