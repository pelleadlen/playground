import tw from "tailwind-styled-components";

export const TripWrapper = tw.div`

 bg-white
  flex 
  flex-col
   gap-6 
   items-center 
   justify-center 
   w-screen
   h-full
   pl-6 pr-6

 

`;

export const Hero = tw.section`
w-full
h-full
mt-24
flex
flex-col
lg:flex-row

`;

export const Intro = tw.div`
flex gap-8 text-base md:text-2xl mb-12 self-start

`;

export const Methods = tw.div`
flex flex-col lg:flex-row w-full justify-between

`;

export const ListWrapper = tw.div`
max-w-lg mt-12 lg:mt-0
`;

export const List = tw.li`
text-lg md:text-xl pb-4
`;

export const Process = tw.div`
flex flex-col gap-2 self-start font-bold text-5xl lg:text-7xl tracking-tight
`;

export const Video = tw.div`
h-screen  flex items-center justify-center

`;

export const ImageWrap = tw.div`
relative w-full h-[60vh]

`;

export const OtherProjects = tw.div`
bg-body flex flex-col items-center justify-center h-screen w-screen pb-24

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
