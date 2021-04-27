import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth);
  return (
    <Container>
      <p>{message.message}</p>
    </Container>
  );
};

export default Message;

const Container = styled.div``;

const MessageElement = styled.p`
  width: fit-content;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;
