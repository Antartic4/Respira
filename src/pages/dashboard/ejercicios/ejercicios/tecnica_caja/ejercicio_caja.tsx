import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { stringify } from "querystring";
import Layout from "../../../../../common/components/Layout";

import { requireAuth } from "../../../../../common/requireAuth";

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});

const Dashboard: NextPage = () => {
  const { data } = useSession();

  return (
    <Layout>
      <>
        <iframe
          className="w-full mx-auto "
          height="1000px"
          src="https://fabrica.confisa.do/StaticFiles/Campanas/img/borrar/codepen/Ejercicio3/index.html"
          frameBorder="0"
        ></iframe>
      </>
    </Layout>
  );
};

export default Dashboard;
