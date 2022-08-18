import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { stringify } from "querystring";
import Layout from "../../common/components/Layout";

import { requireAuth } from "../../common/requireAuth";

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});

const Dashboard: NextPage = () => {
  const { data } = useSession();

  return (
    <Layout>
      <>
        <div className="bg-violet-300">
          <br />
          <h1 className="text-4xl ">Elija que actividad desea ver</h1>
          <br />
          <br />
          <div className="container bg-violet-300">
            {/* div 1 */}
            <div className="product ">
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <Link href="/dashboard/ejercicios/meditacion">
                <div className="content">
                  <a className="/dashboard/ejercicios/audios"></a>
                  <div className="exercise"></div>
                </div>
              </Link>
              <span className="title">
                Meditacion
                <span>Escucha</span>
              </span>
            </div>
            <br />
            {/* div 2 */}
            <div className="product">
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <Link href="/dashboard/ejercicios/musicoterapia">
                <div className="content">
                  <div className="sleep"></div>
                </div>
              </Link>
              <span className="title">
                Ruido de Color
                <span>Descansa</span>
              </span>
            </div>
            <br />
            {/* div 3 */}
            <div className="product">
              <div className="effect-1"></div>
              <div className="effect-2"></div>
              <Link href="/dashboard/ejercicios/ejercicios">
                <div className="content">
                  <div className="meditation"></div>
                </div>
              </Link>
              <span className="title">
                Ejercicio
                <span>Enfoque/Concentracion</span>
              </span>
            </div>
            <br />
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Dashboard;
