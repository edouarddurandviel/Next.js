import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home page",
  description: "Some description of the page",
};

const Home = () => {
  return (
    <main>
      <h1>Companies dashboard</h1>
      <p>introduction</p>
    </main>
  );
};

export default Home;
