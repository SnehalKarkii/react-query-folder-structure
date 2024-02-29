import { postUrl, tagUrl } from "./url";

const fetchPosts = async (page) => {
  const response = await fetch(
    `${postUrl}${page ? `_page=${page}&_per_page=5` : ""}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch posts. Status: ${response.status}`);
  }

  const postData = await response.json();
  return postData;
};

const fetchTags = async () => {
  const response = await fetch(`${tagUrl}`);
  const tagsData = await response.json();
  return tagsData;
};

export { fetchPosts, fetchTags };
