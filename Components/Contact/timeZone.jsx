import Clock from "react-live-clock";

export const TimeZone = () => {
  return (
    <div className="invisible md:visible">
      <h3 className="text-2xl ">LOCAL TIME</h3>
      <Clock
        format={"h:mm A"}
        timezone={"Europe/Stockholm"}
        className="
        text-2xl text-gray-500 underline"
        ticking={true}
        noSsr={true}
      />
    </div>
  );
};
