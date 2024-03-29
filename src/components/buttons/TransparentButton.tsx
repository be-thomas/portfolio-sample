import { Button } from "@chakra-ui/react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined
}
export const TransparentButton = ({ text, type }: ButtonProps) => (
  <Button
    w="15rem"
    borderWidth="1px"
    borderStyle="solid"
    borderColor="coloredBorder"
    h="3.5rem"  
    alignItems="center"
    borderRadius="5px"
    _hover={{ bg: "transparentButtonHover" }}
    transition="0.2s"
    cursor="pointer"
    _active={{ bg: "transparentButtonActive" }}
    backdropFilter="blur(24px)"
    type={type}
    bg="none"
    fontWeight="400"
  >
    {text}
  </Button>
);
