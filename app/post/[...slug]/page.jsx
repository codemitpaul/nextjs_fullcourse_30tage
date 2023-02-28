import React from "react";

const PostDetailPage = ({ params }) => {
  const name = params.slug[0];
  const age = params.slug[1];
  const job = params.slug[2];
  return (
    <div className="flex flex-col space-y-3">
      <h1 className="text-3xl font-bold">{name}</h1>
      <h2 className="text-2xl font-semibold">{age}</h2>
      <h2 className="text-sm font-extralight">{job}</h2>
    </div>
  );
};

export default PostDetailPage;
