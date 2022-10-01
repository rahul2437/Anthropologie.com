import {
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Subscription = () => {
  return (
    <div>
      <div>
        <HStack px={10}>
          <VStack alignItems={"flex-start"}>
            <Text>Sign Up for Email</Text>
            <Text>
              Receive early access to new arrivals, sales, exclusive content,
              events and much more!
            </Text>
          </VStack>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input width={"20rem"} placeholder="Email" />
          </FormControl>
        </HStack>
      </div>
    </div>
  );
};

export default Subscription;
