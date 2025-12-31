import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Some description of the page',
};

const Home = () => {
  return (
    <main>
      <h1>Dashbord home</h1>
      <p>Nested layouts in Next.js</p>
    </main>
  );
};

export default Home;
