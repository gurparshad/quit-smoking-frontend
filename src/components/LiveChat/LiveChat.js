import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #46516e;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  max-height: 700px;
  overflow: auto;
  width: 98%;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
  margin-left: 25px;
  margin-right: 25px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid lightgray;
  outline: none;
  color: lightgray;
  letter-spacing: 1px;
  line-height: 20px;
  overflow: auto;
  ::placeholder {
    color: lightgray;
  }
`;

const Button = styled.button`
  background-color: #399eb5;
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;

  font-size: 17px;
`;

const Form = styled.form`
  width: 400px;
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MyMessage = styled.div`
  width: 45%;
  background-color: #399eb5;
  color: #46516e;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: transparent;
  color: lightgray;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`;

const LiveChat = () => {
  const [yourId, setYourId] = useState();
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("/");

    socketRef.current.on("your id", (id) => {
      setYourId(id);
    });
    socketRef.current.on("message", (message) => {
      console.log("here");
      receivedMessage(message);
    });
  }, []);

  function receivedMessage(message) {
    setMessages((oldMsgs) => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    console.log("inside snd message");
    console.log(message);
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourId,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    console.log("inside the handle change");
    console.log(e.target.value);
    setMessage(e.target.value);
  }

  return (
    <div>
      <Page>
        <Container>
          {messages.map((message, index) => {
            if (message.id === yourId) {
              return (
                <MyRow key={index}>
                  <MyMessage>{message.body}</MyMessage>
                </MyRow>
              );
            }
            return (
              <PartnerRow key={index}>
                <PartnerMessage>{message.body}</PartnerMessage>
              </PartnerRow>
            );
          })}
        </Container>
        <Form onSubmit={sendMessage}>
          <TextArea
            value={message}
            onChange={handleChange}
            placeholder="Say something..."
          />
          <Button>Send</Button>
        </Form>
      </Page>
    </div>
  );
};

export default LiveChat;
