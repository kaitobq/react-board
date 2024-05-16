import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CreateMessage from "./create-message";

const Thread = () => {
  const params = useParams();
  const thread_id = params.thread_id;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(",", thread_id);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`
        );
        setMessages(response.data.posts);
        console.log(messages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [thread_id]);

  const addMessage = (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="Container">
      <h2>スレッド一覧</h2>
      {messages.map((message) => (
        <div key={message.id}>
          <h3>{message.post}</h3>
        </div>
      ))}
      <CreateMessage thread_id={thread_id} addMessage={addMessage} />
    </div>
  );
};

export default Thread;
