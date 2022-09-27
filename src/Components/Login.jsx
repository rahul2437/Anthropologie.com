import {
  Box,
  Center,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/Auth/AuthContext";

export const Login = () => {
  const { state, handleChange } = useContext(AuthContext);

  const isError = state.email === "";

  return (
    <Container>
      <Center>
        <Text fontSize={"xl"}>SIGN IN</Text>
      </Center>
      <Divider />
      <Center>
        <Text align={"center"} fontSize={"sm"}>
          Sign in so you can save items to your wishlists, track your orders,
          and check out faster!
        </Text>
      </Center>
      <Box>
        <FormControl isInvalid={isError}>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            value={state.email}
            onChange={handleChange}
          />
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            value={state.password}
            onChange={handleChange}
          />
          {!isError ? (
            <FormHelperText>Enter the email.</FormHelperText>
          ) : (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
      </Box>
    </Container>
  );
};
