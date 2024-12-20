import React, { useState, useEffect } from "react";
import { getToken } from "../../handler/token.handler.js";

function Comments({ movieId }) {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [userName, setUserName] = useState("");
  const token = getToken();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/comments/${movieId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        if (token) setComments(data.slice(0, 10));
      })
      .catch((error) => console.error("Error fetching comments:", error));

    fetch(`${process.env.REACT_APP_SERVER_URL}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUserName(data.nickname))
      .catch((error) => console.error("Error fetching user name:", error));
  }, [movieId]);

  const handleCommentChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!commentInput.trim()) return;
    const newComment = {
      name: userName || "John Doe",
      text: commentInput,
      timestamp: new Date().toLocaleString(),
    };

    fetch(`${process.env.REACT_APP_SERVER_URL}/comments/${movieId}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => response.json())
      .then((data) => {
        setComments((prevComments) => [data, ...prevComments].slice(0, 10));
      })
      .catch((error) => console.error("Error posting comment:", error));

    setCommentInput("");
  };

  return (
    <div className="mx-auto p-5 bg-gray-900 text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Comments</h1>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-6">
        <input
          type="text"
          value={commentInput}
          onChange={handleCommentChange}
          placeholder={token ? "Add a comment..." : "Login to send a comment"}
          className="w-full p-2 bg-gray-800 border border-gray-700 text-white rounded-l-md outline-none"
          disabled={!token}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-r-md"
        >
          Submit
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-3">
            <svg
              className="h-10 w-10 rounded-full bg-gray-700 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <div className="bg-gray-800 p-3 rounded-lg flex-1">
              <strong className="block font-medium">{comment.name}</strong>
              <p className="text-sm">{comment.text}</p>
              <small className="text-gray-400">{comment.timestamp}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
