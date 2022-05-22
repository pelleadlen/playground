import Clock from "react-live-clock";

export const TimeZone = () => {
  return (
    <div>
      <h3 className="text-2xl text-gray-400">LOCAL TIME</h3>
      <Clock
        format={"h:mm A"}
        timezone={"Europe/Stockholm"}
        className="text-white text-2xl underline"
        ticking={true}
      />
    </div>
  );
};
