const Persona = () => {
  return (
    <div className="flex justify-center w-full h-screen p-6">
      <div className="grid grid-cols-1 max-w-[1440px] lg:grid-cols-12 grid-flow-row lg:grid-rows-2 gap-6 w-full h-full ">
        <div className=" bg-indigo-500 col-span-6 rounded-3xl" />
        <div className=" bg-green-500 col-span-6 rounded-3xl" />
        <div className=" bg-orange-500 row-start-2 col-span-6 rounded-3xl" />
        <div className="col-span-6 grid grid-cols-1 grid-rows-2 gap-6 rounded-3xl">
          <div className="bg-indigo-500 rounded-3xl w-full h-full" />
          <div className="bg-indigo-500 rounded-3xl w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Persona;
