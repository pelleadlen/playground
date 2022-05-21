import Clock from "react-live-clock";

export const TimeZone = () => {
  return (
    <div>
      <h3 className="text-2xl text-gray-400">LOCAL TIME</h3>
      <Clock
        format={"H:MM A"}
        className="text-white text-2xl underline"
        ticking={true}
        interval={100}
      />
    </div>
  );
};
