import Link from "next/link";
import React from "react";

const BlogDetailPage = ({ params }) => {
  console.log(params.slug);
  return <div>Detail Page {params.slug}</div>;
};

export default BlogDetailPage;
