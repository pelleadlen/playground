import styled from "styled-components";
import { IoSunnyOutline } from "react-icons/io5";
import { useState } from "react";

const Icon = styled(IoSunnyOutline)`
  right: 0;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  padding: 0.5rem;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 10;
  transition: background-color 200ms;
  border-radius: 0.5rem;
  &:hover {
    background-color: hsl(210 98.8% 14.4% / 0.055);
  }
  @media only screen and (max-width: 640px) {
    right: 1rem;
  }
`;

export const ToggleSwitch = ({ handleToggle }) => {
  return (
    <IconWrapper
      onClick={() => {
        handleToggle();
      }}
    >
      <Icon size={16} />
    </IconWrapper>
  );
};
