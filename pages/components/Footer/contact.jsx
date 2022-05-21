import { TimeZone } from "./timeZone";

export const Contact = () => {
  return (
    <div className="flex -ml-6 -mr-6 overflow-hidden items-center justify-center w-screen h-[110vh] rounded-tl-3xl rounded-tr-3xl bg-black">
      <h3 className="text-white text-7xl">Say hi!</h3>
      <TimeZone />
    </div>
  );
};
