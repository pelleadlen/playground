import { useState } from "react";
import { Reorder, useMotionValue } from "framer-motion";
import { RevealUp } from "../../hooks/animation";

import {
  Grid,
  Heading,
  Paragraph,
  TextBlock,
  Wrapper,
} from "./styled/styledForgetful";

// const listItems = [
//   { key: "blue", color: "rgb(82 24 250)" },
//   { key: "orange", color: "rgb(251 146 60)" },
//   { key: "green", color: " rgb(74 222 128)" },
//   { key: "purple", color: "rgb(192 132 252)" },
//   { key: "pink", color: "rgb(244 114 182)" },
// ];

const listItems = [
  { color: "rgb(82 24 250)", id: 1 },
  { color: "rgb(251 146 60)", id: 2 },
  { color: "rgb(74 222 128)", id: 3 },
  { color: "rgb(192 132 252)", id: 4 },
];

const List = () => {
  const [items, setItems] = useState(listItems);
  const y = useMotionValue(0);
  return (
    <Reorder.Group style={{ y }} axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <Reorder.Item
          transition={{ type: "spring", stiffness: 40, damping: 12 }}
          style={{
            position: "relative",
            backgroundColor: `${item.color}`,
            maxWidth: "400px",
            width: "280px",
            height: "4rem",
            margin: "0.5rem 0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #000",
          }}
          value={item}
          key={item.id}
        />
      ))}
    </Reorder.Group>
  );
};

const ReorderSection = () => {
  return (
    <>
      <RevealUp cascade={true}>
        <Grid>
          <TextBlock>
            <Heading>Reordering</Heading>
            <Paragraph>
              Timeblocking is a great way to organize your day with the use of
              different colors and blocks. Despite how simple it looks, this
              system makes it easy to structure your day and stay on top of what
              you need to accomplish. <br /> <br /> The draggable blocks allow
              making it easy to reorder list elements. We need to make sure that
              the draggable block animation is nice and smooth, so we’re moving
              as a whole, but also allowing for short drag motions so they can
              still be interacted with. When dragging an element we need to
              raise the gravity of the higher z-index, and lower the other one
              so it feels that they are on top of each other
            </Paragraph>
          </TextBlock>
          <Wrapper>
            <List />
          </Wrapper>
        </Grid>
      </RevealUp>
    </>
  );
};

export default ReorderSection;
