import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  List,
  ListItem,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
  };

  const handleSaveTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].text = editValue;
    setTodos(newTodos);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          The Ultimate Procrastination List
        </Heading>
        <HStack width="100%">
          <Input
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={handleAddTodo} colorScheme="teal">
            Add
          </Button>
        </HStack>
        <List width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} p={2} borderWidth="1px" borderRadius="md">
              <Flex align="center">
                {editIndex === index ? (
                  <>
                    <Input
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      mr={2}
                    />
                    <Button onClick={() => handleSaveTodo(index)} colorScheme="teal" mr={2}>
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    <Checkbox
                      isChecked={todo.completed}
                      onChange={() => handleToggleComplete(index)}
                    >
                      <Text as={todo.completed ? "s" : ""}>{todo.text}</Text>
                    </Checkbox>
                    <Spacer />
                    <Button onClick={() => handleEditTodo(index)} colorScheme="blue" size="sm" mr={2}>
                      Edit
                    </Button>
                    <IconButton
                      aria-label="Delete todo"
                      icon={<FaTrash />}
                      size="sm"
                      onClick={() => handleDeleteTodo(index)}
                    />
                  </>
                )}
              </Flex>
            </ListItem>
          ))}
        </List>
        <Box as="footer" pt={10}>
          <Text>Footer Placeholder Text</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;