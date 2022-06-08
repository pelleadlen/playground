import Tilt from "react-parallax-tilt";

export const Slogan = () => {
  return (
    <section className="flex flex-col bg-body rounded-tl-3xl rounded-tr-3xl h-screen w-full items-center justify-center text-5xl lg:text-8xl leading-[88%] font-medium">
      <Tilt
        perspective={800}
        transitionSpeed={1000}
        transitionEasing={"cubic-bezier(.03,.98,.52,.99)"}
      >
        <div className="flex flex-col justify-start">
          <h1>Whatʼs new</h1>
          <h1>and exciting in</h1>
          <h1>product design?</h1>
        </div>
      </Tilt>
    </section>
  );
};
