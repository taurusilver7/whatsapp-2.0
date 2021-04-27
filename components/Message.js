import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import moment from "moment";

const Message = ({ user, message }) => {
  const [userLoggedIn] = useAuthState(auth);
  const TypeOfMsg = user === userLoggedIn.email ? Sender : Receiver;
  return (
    <Container>
      <TypeOfMsg>
        <ChatName>{message?.user}</ChatName>
        {message.message}
        <Timestamp>
          {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
        </Timestamp>
      </TypeOfMsg>
    </Container>
  );
};

export default Message;

const Timestamp = styled.span`
  margin-left: 5px;
  font-size: x-small;
`;

const ChatName = styled.span`
  position: absolute;
  top: -15px;
  font-weight: 800;
  font-size: xx-small;
`;

const Container = styled.div``;

const MessageElement = styled.p`
  width: fit-content;
  padding: 10px;
  border-radius: 8px;
  margin: 7px;
  margin-bottom: 20px;
  min-width: 60px;
  padding-bottom: 10px;
  position: relative;
  text-align: right;
`;

const Sender = styled(MessageElement)`
  background-color: #dcf8c6;
  margin-left: auto;
`;

const Receiver = styled(MessageElement)`
  background-color: whitesmoke;
  text-align: left;
`;
