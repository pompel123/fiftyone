import React from "react";
import styled from "styled-components";

import { Box } from "./utils";

const CellHeader = styled(Box)`
  cursor: ${({ clickable }) => (clickable ? "pointer" : undefined)};
  font-weight: bold;
  user-select: none;
  border-radius: 3px;

  .icon {
    float: right;
  }
`;

type Props = {
  onClick: () => void;
};

export default ({ children, icon, onClick, ...props }: Props) => {
  const onClickWrapper = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <CellHeader
      clickable={Boolean(onClick)}
      onClick={onClickWrapper}
      {...props}
    >
      {icon ? <span className="icon">{icon}</span> : null}
      {children}
    </CellHeader>
  );
};
