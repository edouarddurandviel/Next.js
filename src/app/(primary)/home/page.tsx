import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "Some description of the page",
};

const HomePage = () => {
  return (
    <main>
      <h1>Home page</h1>
      <p>Some long presentation</p>
    </main>
  );
};

export default HomePage;
