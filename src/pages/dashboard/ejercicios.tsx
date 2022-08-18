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
        <div className="flex flex-col min-h-screen text-center">
          <div className="h-5 bg-violet-300"></div>
          <div className="flex-grow bg-violet-300">
            <div className="bg-violet-300">
              <br />
              <div className="w-1/6"></div>
              <h1 className="justify-center w-2/3 pb-2 mx-auto text-4xl text-black bg-white border rounded-2xl ">
                Elija que actividad desea ver
              </h1>
              <div className="w-1/6"></div>
              <br />
              <br />
              <div className="container bg-violet-300">
                {/* div 1 */}
                <div className="product">
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
          </div>
          <div className="h-32 p-6 bg-violet-300"></div>
        </div>
      </>
    </Layout>
  );
};

export default Dashboard;
