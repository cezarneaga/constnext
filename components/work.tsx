import { Link } from "components/chakra-link";
import { Box, Button, Center, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import type { Project } from "lib/contentTypes";
import Image from "next/image";
import { twoDigits } from "utils/two-digits";

type Props = {
  index: number;
  project: Project;
};
export function Work({ index, project }: Props) {
  const textColor = useColorModeValue("gray.600", "white");
  return (
    <Flex
      px="4"
      flexDirection={["column", "column", index % 2 === 0 ? "row-reverse" : "row"]}
      maxW="1280px"
      width="100%"
      mx="auto"
      alignItems="stretch"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        width={["100%", "100%", "50%", "50%", "50%"]}
        alignItems="flex-start"
        paddingRight={["0", "0", index % 2 === 0 ? "0" : "4"]}
        paddingLeft={["0", "0", index % 2 === 0 ? "4" : "0"]}
        py={[8, 8, 0]}
      >
        <Heading as="h3" fontSize="52px" lineHeight="1.5em" color="brand.500">
          {twoDigits(index + 1)}
        </Heading>
        <Heading as="h2" fontSize="22px" lineHeight="1.5em" color="brand.500">
          {project.title}
        </Heading>
        <Text fontSize="18px" lineHeight="1.5em" color={textColor}>
          {project.description}
        </Text>
        <Link href={`/projects/${project.slug}`} my={["4", "4", "4", "12"]}>
          <Button
            colorScheme="brand"
            _hover={{ color: "gray.700", backgroundColor: "white" }}
            variant="outline"
            borderWidth="4px"
          >
            View Project
          </Button>
        </Link>
      </Flex>
      <Box width={["100%", "100%", "50%", "50%", "50%"]} flexShrink={0}>
        <Image
          src={project.image.url}
          alt={project.image.title || ""}
          width={624}
          height={500}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>
    </Flex>
  );
}
