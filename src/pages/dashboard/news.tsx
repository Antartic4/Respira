import type {
  GetStaticProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { Article } from "../../../types";
import Layout from "../../common/components/Layout";
import { useEffect, useState } from "react";
import ArticleCollection from "../../common/components/ArticleCollection";
import Head from "next/head";

export interface Articulos {
  status: string;
  totalResults: number;
  articles: Article[];
}

const Home: NextPage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const res = await fetch(
        "https://newsapi.org/v2/everything?q='ansiedad'&excludeDomains=elmundo.es&searchIn=title,description&language=es&apiKey=952e3baa215a4c6aa0d3e3dcb8f843c0"
      );
      const results = await res.json();
      setArticles(results?.articles);
    };
    getArticles();
  }, []);
  return (
    <Layout>
      <Head>
        <title>Respira App - Noticias</title>
      </Head>
      <div className="flex flex-col min-h-screen text-center">
        <div className="flex-grow p-6 from-violet-300 to-violet-400 bg-gradient-to-l">
          <div>
            {articles?.map((article: Article, index) => (
              <ArticleCollection key={index} {...article} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
