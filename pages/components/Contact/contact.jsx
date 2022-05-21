import { Footer } from "./footer";

export const Contact = () => {
  return (
    <div className=" flex flex-col justify-between -ml-6 -mr-6 overflow-hidden w-screen h-[110vh] rounded-tl-3xl rounded-tr-3xl bg-black">
      <div className=" text-white flex flex-col gap-4 w-full h-full items-center justify-center  ">
        <h3 className=" font-medium text-9xl">Say hi!</h3>
        <a
          href="mailto:pelleadlen@gmail.com"
          className="text-3xl tracking-wide text-gray-400 font-light  "
        >
          pelleadlen@gmail.com
        </a>
      </div>
      <Footer className={` mb-8`} />
    </div>
  );
};
