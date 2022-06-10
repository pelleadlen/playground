import Clock from "react-live-clock";

export const TimeZone = () => {
  return (
    <>
      <div className="flex gap-3 pb-6 pl-6">
        <h3 className="text-xl ">LOCAL TIME</h3>
        <Clock
          format={"h:mm A"}
          timezone={"Europe/Stockholm"}
          className="
        text-xl underline"
          ticking={true}
          noSsr={true}
        />
      </div>
    </>
  );
};
