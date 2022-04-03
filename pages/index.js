import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section classname={utilStyles.headingMd}>
        <p>My name is Rizki Hutama</p>
        <p>I am a software engineer</p>
      </section>
    </Layout>
  );
}