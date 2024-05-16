import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const CreateMessage = ({ thread_id, addMessage }) => {
  const messageRef = useRef();
  const navigate = useNavigate();

  const postHandler = async () => {
    const message = messageRef.current.value;

    if (!message) {
      alert("メッセージを入力してください。");
      return;
    }

    try {
      const response = await axios.post(
        `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`,
        { post: message }
      );
      addMessage({ id: response.data.id, post: message });
      messageRef.current.value = "";
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <textarea ref={messageRef} style={{ width: "100%", height: "50px" }} />
      <button onClick={postHandler} className="SubmitButton">
        送信
      </button>
    </div>
  );
};

export default CreateMessage;
