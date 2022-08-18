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
      <br />
      <div className="flex">
        <div className="w-1/6 "></div>
        <div className="w-2/3 text-center bg-white rounded-xl">
          <div>Bienvendios, </div>
          <div className="font-bold">{data?.user?.email}</div>
        </div>

        <div className="w-1/6 "></div>
      </div>
      <div className="flex">
        <div className="w-1/6"></div>
        <div className="w-1/6">
          <br />
          <div className="flex justify-center">
            <Link
              href="/dashboard/ejercicios/musicoterapia"
              className="border rounded-xl"
            >
              <a className="px-5 pt-2 text-xl text-center bg-purple-200 hover:font-bold hover:bg-purple-400 rounded-xl">
                <picture>
                  <source
                    srcSet="https://i.ibb.co/vvV947W/music-therapy.png"
                    type="image/webp"
                  />
                  <img
                    src="https://i.ibb.co/vvV947W/music-therapy.png"
                    className="rounded-2xl"
                    alt="title"
                  />
                </picture>
                Musico-terapia
              </a>
            </Link>
          </div>
          <br />
          <div className="flex justify-center">
            <Link
              href="/dashboard/ejercicios/musicoterapia/ruido_rosa"
              className="border rounded-xl"
            >
              <a className="px-5 pt-2 text-xl text-center bg-purple-200 hover:font-bold hover:bg-purple-400 rounded-xl">
                <picture>
                  <source
                    srcSet="https://i.ibb.co/jM6k6SD/iconmonstr-sound-wave-4-240.png"
                    type="image/webp"
                  />
                  <img
                    src="https://i.ibb.co/jM6k6SD/iconmonstr-sound-wave-4-240.png"
                    className="rounded-2xl"
                    alt="title"
                  />
                </picture>
                Ruido Rosa
              </a>
            </Link>
          </div>
          <br />
          <div className="flex justify-center">
            <Link
              href="/dashboard/ejercicios/musicoterapia/ruido_blanco"
              className="border rounded-xl"
            >
              <a className="px-5 pt-2 text-xl text-center bg-purple-200 hover:font-bold hover:bg-purple-400 rounded-xl">
                <picture>
                  <source
                    srcSet="https://i.ibb.co/7Kz1Gzn/iconmonstr-sound-wave-4-240-2.png"
                    type="image/webp"
                  />
                  <img
                    src="https://i.ibb.co/7Kz1Gzn/iconmonstr-sound-wave-4-240-2.png"
                    className="rounded-2xl"
                    alt="title"
                  />
                </picture>
                Ruido Blanco
              </a>
            </Link>
          </div>
          <br />
          <div className="flex justify-center">
            <Link
              href="/dashboard/ejercicios/musicoterapia/ruido_marron"
              className="border rounded-xl"
            >
              <a className="px-5 pt-2 text-xl text-center bg-purple-200 hover:font-bold hover:bg-purple-400 rounded-xl">
                <picture>
                  <source
                    srcSet="https://i.ibb.co/HYy9Q4w/iconmonstr-sound-wave-4-240-1.png"
                    type="image/webp"
                  />
                  <img
                    src="https://i.ibb.co/HYy9Q4w/iconmonstr-sound-wave-4-240-1.png"
                    className="rounded-2xl"
                    alt="title"
                  />
                </picture>
                Ruido Marrón
              </a>
            </Link>
          </div>
          <br />
        </div>
        <div className="w-1/12"></div>
        <div className="w-1/6 ">
          <br />
          <div className="flex justify-center">
            <Link
              href="/dashboard/ejercicios/meditacion"
              className="border rounded-xl"
            >
              <a className="px-5 pt-2 text-xl text-center bg-purple-200 hover:font-bold hover:bg-purple-400 rounded-xl">
                <picture>
                  <source
                    srcSet="https://i.ibb.co/h90SbF5/Meditation-amico.png"
                    type="image/webp"
                  />
                  <img
                    src="https://i.ibb.co/h90SbF5/Meditation-amico.png"
                    className="rounded-2xl"
                    alt="title"
                  />
                </picture>
                Meditación
              </a>
            </Link>
          </div>
          <br />
          <div className="flex justify-center">
            <Link
              href="/dashboard/ejercicios/meditacion/conciencia"
              className="border rounded-xl"
            >
              <a className="px-5 pt-2 text-xl text-center bg-purple-200 hover:font-bold hover:bg-purple-400 rounded-xl">
                <picture>
                  <source
                    srcSet="https://i.ibb.co/2SJNGnd/Mindfulness-amico.png"
                    type="image/webp"
                  />
                  <img
                    src="https://i.ibb.co/2SJNGnd/Mindfulness-amico.png"
                    className="rounded-2xl"
                    alt="title"
                  />
                </picture>
                Meditación de Conciencia
              </a>
            </Link>
          </div>
          <br />
          <div className="flex justify-center">
            <Link
              href="/dashboard/ejercicios/meditacion/corporal"
              className="border rounded-xl"
            >
              <a className="px-5 pt-2 text-xl text-center bg-purple-200 hover:font-bold hover:bg-purple-400 rounded-xl">
                <picture>
                  <source
                    srcSet="https://i.ibb.co/0ydSth0/Yes-or-no-amico.png"
                    type="image/webp"
                  />
                  <img
                    src="https://i.ibb.co/0ydSth0/Yes-or-no-amico.png"
                    className="rounded-2xl"
                    alt="title"
                  />
                </picture>
                Meditación de Escaneo Corporal
              </a>
            </Link>
          </div>
          <br />
        </div>
        <div className="w-1/12"></div>
        <div className="w-1/6">
          <br />
          <div className="flex justify-center">
            <Link
              href="/dashboard/ejercicios/ejercicios"
              className="border rounded-xl"
            >
              <a className="px-5 pt-2 text-xl text-center bg-purple-200 hover:font-bold hover:bg-purple-400 rounded-xl">
                <picture>
                  <source
                    srcSet="https://i.ibb.co/rddHzT8/Mango-tree-amico.png"
                    type="image/webp"
                  />
                  <img
                    src="https://i.ibb.co/rddHzT8/Mango-tree-amico.png"
                    className="rounded-2xl"
                    alt="title"
                  />
                </picture>
                Ejercicios
              </a>
            </Link>
          </div>
          <br />
          <div className="flex justify-center">
            <Link
              href="/dashboard/ejercicios/ejercicios/tecnica_pomodoro"
              className="border rounded-xl"
            >
              <a className="px-5 pt-2 text-xl text-center bg-purple-200 hover:font-bold hover:bg-purple-400 rounded-xl">
                <picture>
                  <source
                    srcSet="https://i.ibb.co/wdXqhgW/Work-time-pana-1.png"
                    type="image/webp"
                  />
                  <img
                    src="https://i.ibb.co/wdXqhgW/Work-time-pana-1.png"
                    className="rounded-2xl"
                    alt="title"
                  />
                </picture>
                Técnica Pomodoro
              </a>
            </Link>
          </div>
          <br />
          <div className="flex justify-center">
            <Link
              href="/dashboard/ejercicios/ejercicios/tecnica_caja"
              className="border rounded-xl"
            >
              <a className="px-5 pt-2 text-xl text-center bg-purple-200 hover:font-bold hover:bg-purple-400 rounded-xl">
                <picture>
                  <source
                    srcSet="https://i.ibb.co/MSkVKd6/Loading-amico.png"
                    type="image/webp"
                  />
                  <img
                    src="https://i.ibb.co/MSkVKd6/Loading-amico.png"
                    className="rounded-2xl"
                    alt="title"
                  />
                </picture>
                Respiración de Caja
              </a>
            </Link>
          </div>
          <br />
          <div className="flex justify-center">
            <Link
              href="/dashboard/ejercicios/ejercicios/tecnica_54321"
              className="border rounded-xl"
            >
              <a className="px-5 pt-2 text-xl text-center bg-purple-200 hover:font-bold hover:bg-purple-400 rounded-xl">
                <picture>
                  <source
                    srcSet="https://i.ibb.co/K5K2ywq/Mindfulness-pana.png"
                    type="image/webp"
                  />
                  <img
                    src="https://i.ibb.co/K5K2ywq/Mindfulness-pana.png"
                    className="rounded-2xl"
                    alt="title"
                  />
                </picture>
                <div>
                  <div>Método</div>
                  <div>5-4-3-2-1</div>
                </div>
              </a>
            </Link>
          </div>
          <br />
          <div className="flex justify-center">
            <Link
              href="/dashboard/ejercicios/ejercicios/caminata_consciente"
              className="border rounded-xl"
            >
              <a className="px-5 pt-2 text-xl text-center bg-purple-200 hover:font-bold hover:bg-purple-400 rounded-xl">
                <picture>
                  <source
                    srcSet="https://i.ibb.co/X7y0shm/Walking-around-pana.png"
                    type="image/webp"
                  />
                  <img
                    src="https://i.ibb.co/X7y0shm/Walking-around-pana.png"
                    className="rounded-2xl"
                    alt="title"
                  />
                </picture>
                Caminata Consciente
              </a>
            </Link>
          </div>
          <br />
        </div>
        <div className="w-1/6"></div>
      </div>

      <div className="min-h-screen hero">
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
