import { chakra } from "@chakra-ui/react";
import NextLink from "next/link";
import type { ChakraProps } from "@chakra-ui/react";
import type React from "react";

// Omit Next's `as` to avoid conflict with Chakra's polymorphic `as` prop
type LinkProps = Omit<React.ComponentPropsWithoutRef<typeof NextLink>, "as"> &
  ChakraProps & {
    isExternal?: boolean;
    title?: string;
    className?: string;
    children?: React.ReactNode;
  };

const ChakraNextLink = chakra(NextLink);

export const Link = ({ isExternal, children, ...rest }: LinkProps) => {
  return (
    <ChakraNextLink
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {children}
    </ChakraNextLink>
  );
};
