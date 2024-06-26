import React, { useState } from "react";
import { usePostExampleData } from "../hooks/useExampleHook";

function PostPage() {
  const [postData, setPostData] = useState({
    title: "foo",
    body: "bar",
    userId: 1,
  });
  const mutation = usePostExampleData();

  const handlePostData = () => {
    mutation.mutate(postData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (mutation.isLoading) return <p>Loading...</p>;
  if (mutation.isError) return <p>Error: {mutation.error.message}</p>;

  return (
    <div>
      <h1>Post Page</h1>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea name="body" value={postData.body} onChange={handleChange} />
      </div>
      <button onClick={handlePostData}>Post Data</button>
      {mutation.isSuccess && (
        <pre>{JSON.stringify(mutation.data, null, 2)}</pre>
      )}
    </div>
  );
}

export default PostPage;
