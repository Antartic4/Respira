import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
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
      <>
        <br />
        <br />
        <h1 className="text-4xl ">Elija que actividad desea ver</h1>
        <br />
        <br />
        <div className="container">
          {/* div 1 */}
          <div className="product">
            <div className="effect-1"></div>
            <div className="effect-2"></div>
            <Link href="/dashboard/ejercicios/musicoterapia/ruido_blanco">
              <div className="content">
                <a className="/dashboard/ejercicios/audios"></a>
                <div className="exercise"></div>
              </div>
            </Link>
            <span className="title">
              Ruido Blanco
              <span>Aprende, y pruebame!</span>
            </span>
          </div>
          <br />
          {/* div 2 */}
          <div className="product">
            <div className="effect-1"></div>
            <div className="effect-2"></div>
            <Link href="/dashboard/ejercicios/musicoterapia/ruido_rosa">
              <div className="content">
                <div className="sleep"></div>
              </div>
            </Link>
            <span className="title">
              Ruido Rosa
              <span>Aprende, y pruebame!</span>
            </span>
          </div>
          <br />
          {/* div 3 */}
          <div className="product">
            <div className="effect-1"></div>
            <div className="effect-2"></div>
            <Link href="/dashboard/ejercicios/musicoterapia/ruido_marron">
              <div className="content">
                <div className="meditation"></div>
              </div>
            </Link>
            <span className="title">
              Ruido Browniano
              <span>Aprende, y pruebame!</span>
            </span>
          </div>
          <br />
        </div>
      </>
    </Layout>
  );
};

export default Dashboard;
