import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Container maxW="container.md" py={10}>
    <VStack spacing={6}>
      <Heading as="h1" size="2xl">
        About The Ultimate Procrastination List
      </Heading>
      <Text fontSize="lg">
        The Ultimate Procrastination List is a simple and intuitive todo app designed to help you manage your tasks and procrastinate efficiently. Whether you have a list of chores, work tasks, or personal goals, this app helps you keep track of everything in one place.
      </Text>
      <Text fontSize="lg">
        Our mission is to provide a user-friendly platform that makes task management fun and engaging. With features like adding, completing, and deleting tasks, you can stay organized and productive.
      </Text>
      <Text fontSize="lg">
        We hope you enjoy using The Ultimate Procrastination List as much as we enjoyed creating it!
      </Text>
    </VStack>
  </Container>
);

export default About;