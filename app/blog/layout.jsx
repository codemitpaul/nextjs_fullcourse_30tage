export const metadata = {
  title: "Blog",
};

// export async function generateMetadata({ params, searchParams }) {
//     // For /products/123, params.id is "123"
//     // For /products/123?foo=bar, searchParams.get("foo") is "bar"
//     // The return value is the metadata object
//     return { title: '...' }
//   }

const BlogLayout = ({ children }) => {
  return (
    <div>
      Layout
      <section>{children}</section>
    </div>
  );
};

export default BlogLayout;
