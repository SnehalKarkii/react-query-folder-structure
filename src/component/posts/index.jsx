import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../api/api";

const Posts = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchPosts,
  });


  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error?.error}</div>
      ) : (
        <div>
          {data.map((post, index) => {
            return <div key={index}>{post?.title}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default Posts;
