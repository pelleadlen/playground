import { Heading, StyledClock, Wrapper } from "./styled/styledTimeZone";

export const TimeZone = () => {
  return (
    <>
      <Wrapper>
        <Heading>LOCAL TIME</Heading>
        <StyledClock
          format={"h:mm A"}
          timezone={"Europe/Stockholm"}
          className="
        text-xl underline"
          ticking={true}
          noSsr={true}
        />
      </Wrapper>
    </>
  );
};
