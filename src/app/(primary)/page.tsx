import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "Some description of the page",
};

const Home = () => {
  return (
    <main>
      <h1>HOMPAGE</h1>
      <p>Welcome to Next.js application</p>
    </main>
  );
};

export default Home;
