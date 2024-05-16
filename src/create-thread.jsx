import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function CreateThread() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://railway.bulletinboard.techtrain.dev/threads",
        {
          title,
        }
      );
      if (response.status === 200) {
        alert("スレッドが作成されました！");
      }
    } catch (error) {
      alert("エラーが発生しました: " + error);
    }
  };

  return (
    <div className="Container">
      <h2>新規スレッド作成</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="スレッドのタイトルを入力"
          className="TextInput"
        />
        <button type="submit" className="SubmitButton">
          スレッドを作成する
        </button>
      </form>
    </div>
  );
}

export default CreateThread;
