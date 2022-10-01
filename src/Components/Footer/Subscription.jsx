import {
  Center,
  Divider,
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
    <div
      style={{
        padding: "3rem",
      }}
    >
      <div>
        <HStack>
          <VStack alignItems={"flex-start"}>
            <Text fontSize={18}>Sign Up for Email</Text>
            <Text fontSize={15}>
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
      <Divider />
      <Text fontSize={12} opacity={"80%"}>
        By signing up, you will receive Anthropologie offers, promotions and
        other commercial messages. You are also agreeing to Anthropologie’s
        Privacy Policy. You may unsubscribe at any time.
      </Text>
      <hr />
    </div>
  );
};

export default Subscription;
