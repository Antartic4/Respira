import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Head from "next/head";
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
          <div className="h-24 p-6 "></div>
          <div className="flex-grow p-6">
            <h1 className="text-3xl font-bold ">
              <br />
              <br />
              Directorio de los Servicios de Salud Mental
            </h1>
            <div>
              <br />
              <br />
              <h1 className="text-center">
                <a
                  className="px-2 mx-auto font-bold text-black bg-white hover:bg-violet-400 rounded-xl"
                  href="https://www.docdroid.net/euUOPby/directorio-de-los-servicios-de-salud-mental-del-sns-2021-2-pdf"
                >
                  Descargar
                </a>
              </h1>
              <br />
            </div>
          </div>
          <div className="h-32 p-6 "></div>
        </div>
      </>
    </Layout>
  );
};

export default Dashboard;
