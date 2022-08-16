import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { stringify } from "querystring";
import Layout from "../../../common/components/Layout";

import { requireAuth } from "../../../common/requireAuth";

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});

const Dashboard: NextPage = () => {
  const { data } = useSession();

  return (
    <Layout>
      <body className="bg-violet-200">
        <div className="main">
          <ul className="cards">
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <a>
                    <img
                      src="https://i.pinimg.com/originals/69/50/85/695085dd63269385fde8e1ef34fae700.jpg"
                      alt="title"
                    />
                  </a>
                </div>
                <div className="card_content">
                  <h2 className="text-2xl card_title">Ruido Blanco</h2>
                  <p className="card_text">
                    Los sonidos continuos de la naturaleza, como las cascadas...
                  </p>
                  <br />
                  <br />
                  <button className="btn card_btn">
                    <Link href="/dashboard/ejercicios/musicoterapia/ruido_blanco">
                      <a>Ver Mas</a>
                    </Link>
                  </button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <a>
                    <img
                      src="https://i.pinimg.com/originals/62/d5/bf/62d5bfe596bd0e31b883a4edb9a8c4cb.jpg"
                      alt="title"
                    />
                  </a>
                </div>
                <div className="card_content1">
                  <h2 className="text-2xl card_title">Ruido Marrón</h2>
                  <p className="card_text">
                    El ruido marrón tiene una energía aún mayor en frecuencias
                    más bajas.
                  </p>
                  <br />
                  <br />
                  <Link href="/dashboard/ejercicios/musicoterapia/ruido_marron">
                    <button className="btn card_btn">
                      <a>Ver Mas</a>
                    </button>
                  </Link>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <a>
                    <img
                      src="https://i.pinimg.com/originals/eb/c1/d1/ebc1d11d1cf5437af2a2f6c5300dc138.jpg"
                      alt="title"
                    />
                  </a>
                </div>
                <div className="card_content2">
                  <h2 className="text-2xl card_title">Ruido Rosa</h2>
                  <p className="card_text">
                    La mejor manera de explicar el ruido rosa es un ruido
                    ambiental que a menudo se reproduce...
                  </p>
                  <br />
                  <br />
                  <button className="btn card_btn">
                    <a href="/dashboard/ejercicios/musicoterapia/ruido_rosa">
                      Ver Mas
                    </a>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </body>
      <div className="bg-violet-200"></div>
    </Layout>
  );
};

export default Dashboard;
