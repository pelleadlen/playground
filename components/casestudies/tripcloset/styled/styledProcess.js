import styled from "styled-components";

export const ProcessTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  padding-bottom: 0.25em;
  letter-spacing: -0.02em;
`;

export const ProcessParagraph = styled.p`
  line-height: 130%;
  letter-spacing: -0.02em;
  font-weight: 300;
  font-size: 1.5rem;
`;

export const ProcessInformation = ({ method, methodInformation }) => {
  return (
    <>
      <div>
        <ProcessTitle>{method}</ProcessTitle>
        <ProcessParagraph>{methodInformation}</ProcessParagraph>
      </div>
    </>
  );
};

//Process section

export const Processes = styled.section`
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProcessText = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.75rem 0 4rem 0;
  @media (max-width: 768px) {
    max-width: 75%;
    padding: 2.75rem 1rem;
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
