import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <div className={utilStyles.projectLink}>
          <a href="https://github.com/atyami/hello-world" target="_blank" rel="noopener noreferrer">Hello World</a>
        </div>
        <div className={utilStyles.projectLink}>
          <a href="https://github.com/atyami/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer">Tic-Tac-Toe</a>
        </div>
        <div className={utilStyles.projectLink}>
          <a href="https://github.com/atyami/nextjs-blog" target="_blank" rel="noopener noreferrer">Nextjs-Blog</a>
        </div>
      </section>
    </Layout>
  );
}