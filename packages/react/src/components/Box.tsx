import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  background: "$gray800",
  border: "1px solid $gray600",
});

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}
Box.displayName = "Box";
