import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/App/AppContext";
import { AuthContext } from "../Context/Auth/AuthContext";

export const AlertChecout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { isAuth, handleLogout } = useContext(AuthContext);
  const { setCart } = useContext(AppContext);

  const navigate = useNavigate();

  const confirmAction = () => {
    onClose();
    handleLogout();
    navigate("/");
    setCart([]);
  };

  return (
    <div>
      {!isAuth ? "Please Login to checkout" : null}
      <Button disabled={!isAuth} colorScheme="yellow" onClick={onOpen}>
        Checkout
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Place Order
            </AlertDialogHeader>

            <AlertDialogBody>
              Confirm Checkout:
              <br /> Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="green" onClick={confirmAction} ml={3}>
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};
