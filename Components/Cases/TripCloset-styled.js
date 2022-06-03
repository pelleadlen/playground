import styled from "styled-components";

export const TripWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  padding: 0 1.5rem 0 1.5rem;
`;

export const Hero = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 6rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Intro = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 3rem;
  align-self: flex-start;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export const Methods = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ListWrapper = styled.div`
  max-width: 32rem;
  margin-top: 3rem;
  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

export const List = styled.li`
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

export const Process = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-self: flex-start;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1;
  letter-spacing: -0.025em;
  @media (min-width: 1024px) {
    font-size: 4.5rem;
    line-height: 1;
  }
`;

export const Video = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
`;

export const OtherProjects = styled.div`
  background-color: rgb(242 242 242);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding-bottom: 6rem;
`;

export const Information = ({ headline, text }) => {
  return (
    <div className="flex flex-col mb-12 mt-12 gap-2 self-start">
      <h4 className="text-gray-500 text-2xl">{headline}</h4>
      <p className="max-w-[780px] mb-12 text-2xl md:text-3xl font-medium  ">
        {text}
      </p>
    </div>
  );
};
