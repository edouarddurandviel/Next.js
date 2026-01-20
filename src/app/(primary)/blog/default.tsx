import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Some description of the page",
};

const Default = () => {
  return (
    <main>
      <h1>Blog home</h1>
      <Link key={1} href="blog/1">
        article 1
      </Link>
    </main>
  );
};

export default Default;
