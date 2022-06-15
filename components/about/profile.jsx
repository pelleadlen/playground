import Image from "next/image";
import { FadeIn } from "../hook/fadeIn";
import { motion } from "framer-motion";
export const Profile = () => {
  return (
    <FadeIn
      id="profile"
      className="flex flex-col bg-white items-center rounded-tl-3xl rounded-tr-3xl justify-center pt-12 pb-12 pl-6 pr-6 -z-10 w-screen"
    >
      <div className="flex flex-col">
        <div className=" text-xl md:text-3xl lg:text-4xl font-medium max-w-4xl leading-normal pb-12">
          <p className="mb-6">
            Hi. My name is Pelle Adlén. I’m a music loving tech enthusiast with
            a passion for slick user experiences. Currently based in
            <span className="line-through decoration-4 pl-2 pr-2">
              Gothenburg, Sweden,
            </span>
            anywhere.
          </p>
          <p>
            Design with a purpose is what excites me. And like your favorite
            song somehow seems to be written with you in mind, my aim is always
            a tailor-made satisfaction for the ones experiencing the stuff I
            design. Beyond the obvious beauty and beyond expected function. This
            is my recipe and the flavor I bring to the table. Let’s get together
            and push some pixels for a reason!
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
    </FadeIn>
  );
};
