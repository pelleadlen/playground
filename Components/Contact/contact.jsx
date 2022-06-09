const Contact = () => {
  return (
    <>
      <div className=" flex flex-col justify-between  bg-white w-screen h-screen  ">
        <div className=" flex flex-col gap-4 h-full z-50  bg-body rounded-tr-3xl rounded-tl-3xl items-center justify-center  ">
          <h3 className=" font-medium text-5xl lg:text-9xl">Say hi!</h3>
          <a
            href="mailto:pelleadlen@gmail.com"
            className=" text-xl lg:text-3xl tracking-wide text-gray-500 font-light  "
          >
            pelleadlen@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
