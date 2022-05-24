import Image from "next/image";

export const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col">
        <div className=" text-xl lg:text-4xl font-medium max-w-4xl leading-normal pb-12">
          <p className="mb-6">
            Hi. My name is Pelle Adlén. I’m a music loving tech enthusiast with
            a passion for slick user experiences. Currently based in
            <span className="line-through pl-2 pr-2">Gothenburg, Sweden,</span>
            Anywhere.
          </p>
          <p>
            Design with a purpose is what excites me. And like your favorite
            song somehow seems to be written with you in mind, my aim is always
            a tailor-made satisfaction for <br />
            the ones experiencing the stuff I design. Beyond the obvious beauty
            and beyond expected function.
            <br /> This is my recipe and the flavor I bring to the table.
            <br />
            Let’s get together and push some pixels for a reason!
          </p>
        </div>
        <div className=" relative max-w-[56rem] h-[80vh]">
          <Image
            className=" object-cover rounded-3xl w-full h-full "
            alt="Pelle Adlén in a blue shirt thinking about digital design"
            layout="fill"
            src="/Assets/Images/profilepic.png"
          />
        </div>
      </div>
    </div>
  );
};
