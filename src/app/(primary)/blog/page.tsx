import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Some description of the page",
};

const Blog = () => {
  return (
    <main>
      <h1>Blog home</h1>
      <Link key={1} href="blog/next-js-developer">
        article 1
      </Link>
    </main>
  );
};

export default Blog;
