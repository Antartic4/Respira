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
      <div className="bg-secondary">
        <h3 className="text-2xl font-bold leading-snug text-center text-black">
          Bienvenido, {data?.user?.email}
        </h3>
      </div>

      <div className="min-h-screen bg-purple-200 hero">
        <div className="hero-content">
          <div className="text-center">
            <Link href="/dashboard/ejercicios">
              <button className="btn btn-secondary">Ejercicios</button>
            </Link>
          </div>
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold leading-snug text-center text-black">
              You are logged in!
            </h1>
            <h1>Bienvenidos {data?.user?.email}</h1>
            <p className="my-4 leading-loose text-center">
              You are allowed to visit this page because you have a session,
              otherwise you would be redirected to the login page.
            </p>
            <div className="p-4 my-4 bg-white rounded-lg">
              <pre>
                <code>{JSON.stringify(data, null, 2)}</code>
              </pre>
            </div>
            <div className="text-center">
              <button
                className="btn btn-secondary"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
