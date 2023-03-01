import BlogSection from "./BlogSection";
import CreateForm from "./CreateForm";
import ServerBlogSection from "./ServerBlogSection";

export default function Home() {
  return (
    <div className="p-5 md:p-10">
      <CreateForm />
      <ServerBlogSection />
    </div>
  );
}
