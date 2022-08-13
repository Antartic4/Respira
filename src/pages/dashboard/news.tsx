import type {
  GetStaticProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { json } from "stream/consumers";
import { Article, GetArticleResults } from "../../../types";
import Layout from "../../common/components/Layout";
import { useEffect, useState } from "react";
import ArticleCollection from "../../common/components/ArticleCollection";

// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch(
//     "https://newsapi.org/v2/everything?q=ansiedad&apiKey=952e3baa215a4c6aa0d3e3dcb8f843c0"
//   );
//   const results: GetArticleResults = await res.json();
//   console.log(results);
//   return {
//     props: {
//       articles: results,
//     },
//   };
// };

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
        "https://newsapi.org/v2/everything?q='ansiedad'&language=es&apiKey=952e3baa215a4c6aa0d3e3dcb8f843c0"
      );
      const results = await res.json();
      setArticles(results?.articles);
    };
    getArticles();
  }, []);
  return (
    <>
      <Layout>
        <div>
          <div>
            {articles?.map((article: Article, index) => (
              <ArticleCollection key={index} {...article} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
