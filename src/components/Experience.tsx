import { Flex, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { SectionTitle } from "./SectionTitle";

export const Experience = () => {
  return (
    <Flex
      w="100%"
      justify="center"
      alignItems="center"
      mt="2rem"
      mb="4rem"
      id="experience"
      direction="column"
    >
      <SectionTitle title="Experience" />
      <Flex
        w={{ base: "100%", xl: "70rem", "2xl": "72rem", "3xl": "76rem" }}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Flex
          borderStyle="solid"
          borderWidth="0 0 0 0px"
          borderColor="mainColor"
          ml="1.7rem"
          pl="2rem"
          pr={{ base: "1rem", xl: "3rem" }}
          justify="center"
        >
          <Flex
            direction="column"
            pr="2rem"
            w={{ base: "100%", lg: "95%", xl: "85%" }}
          >
            <Flex gap="1rem" direction={{ base: "column", md: "row" }}>
              <Text variant="paragraphLarge" w="20rem">
                10/2021 – present <br />
                Warsaw, Poland <br />
              </Text>
              <Flex direction="column">
                <Text variant="experienceSubTitle" mb="0.2rem">
                  Front-End Developer - BlueSoft
                </Text>
                <UnorderedList listStyleType="none" ml="0">
                  <ListItem>
                    <Text variant="paragraphSecondary" mb="0.2rem">
                      - Involved in designing and developing ReactJS &
                      TypeScript applications, utilizing various styling
                      libraries
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant="paragraphSecondary" mb="0.2rem">
                      - Worked in agile methodology, participating in a team
                      environment via GitHub and Gitlab
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant="paragraphSecondary" mb="0.2rem">
                      - Collaborated with a team of professional designers,
                      implementing graphic user interfaces consistent with UX
                      rules
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
            <Flex
              mt={{ base: "3rem", md: "1rem" }}
              gap="1rem"
              direction={{ base: "column", md: "row" }}
            >
              <Text variant="paragraphLarge" w="20rem">
                2020 – 2021 <br />
                Warsaw, Poland <br />
              </Text>
              <Flex direction="column">
                <Text variant="experienceSubTitle" mb="0.2rem">
                  Front-End Developer - Freelancer
                </Text>
                <UnorderedList listStyleType="none" ml="0">
                  <ListItem>
                    <Text variant="paragraphSecondary" mb="0.2rem">
                      - Developed features for small business websites in
                      cooperation with two different agencies, often
                      implementing own designs
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text variant="paragraphSecondary">
                      - Worked on improving performance, accessibility and SEO
                      for client websites
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};