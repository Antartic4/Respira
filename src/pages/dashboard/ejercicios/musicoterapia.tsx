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
      <div className="flex flex-col min-h-screen text-center">
        <div className="h-24 p-6 bg-violet-300">
          <h1 className="text-3xl font-bold text-white">Ruidos de Color</h1>
        </div>
        {/* Contenido */}
        <div className="items-center justify-evenly xl:flex 2xl:flex lg:flex sm:flex-grow md:flex-grow bg-violet-300">
          {/* div 1 Rudio Rosa*/}
          <div className="w-screen max-w-sm px-2 pt-2 pr-2 mx-auto border border-gray-500 shadow-md bg-gradient-to-r to-stone-200 from-pink-300 rounded-2xl dark:bg-gray-800 dark:border-gray-700 sm:w-screen">
            <picture>
              <source
                srcSet="https://i.pinimg.com/originals/eb/c1/d1/ebc1d11d1cf5437af2a2f6c5300dc138.jpg"
                type="image/webp"
              />
              <img
                src="https://i.pinimg.com/originals/eb/c1/d1/ebc1d11d1cf5437af2a2f6c5300dc138.jpg"
                className="rounded-2xl"
                alt="title"
              />
            </picture>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ruido Rosa
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                La mejor manera de explicar el ruido rosa es un ruido ambiental
                que a menudo se reproduce de fondo para ayudar a concentrarse y
                ahogar otros sonidos que pueden interferir con la concentración
                o el sueño.
              </p>
              <a
                href="/dashboard/ejercicios/musicoterapia/ruido_rosa"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-400 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-700"
              >
                Leer Mas
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <br />
          {/* div 2 */}
          <div className="max-w-sm px-2 pt-2 pr-2 mx-auto border border-gray-500 shadow-md bg-gradient-to-r to-stone-200 from-zinc-400 rounded-2xl dark:bg-gray-800 dark:border-gray-700">
            <picture>
              <source
                srcSet="https://i.pinimg.com/originals/69/50/85/695085dd63269385fde8e1ef34fae700.jpg"
                type="image/webp"
              />
              <img
                src="https://i.pinimg.com/originals/69/50/85/695085dd63269385fde8e1ef34fae700.jpg"
                className="rounded-2xl"
                alt="title"
              />
            </picture>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ruido Blanco
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                El ruido blanco hace que sea más difícil para nuestro cerebro
                distinguir entre el ruido de fondo y los golpes repentinos en la
                noche que pueden sacarnos de nuestro sueño.
              </p>
              <a
                href="/dashboard/ejercicios/musicoterapia/ruido_blanco"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-400 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-700"
              >
                Leer Mas
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <br />
          {/* div 3 */}
          <div className="max-w-sm px-2 pt-2 pr-2 mx-auto border border-gray-500 shadow-md bg-gradient-to-r to-stone-200 from-yellow-700 rounded-2xl dark:bg-gray-800 dark:border-gray-700">
            <picture>
              <source
                srcSet="https://i.ibb.co/zFGy9sG/3.png"
                type="image/webp"
              />
              <img
                src="https://i.ibb.co/zFGy9sG/3.png"
                className="rounded-2xl"
                alt="title"
              />
            </picture>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ruido Marron
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                El ruido marrón tiene una energía aún mayor en frecuencias más
                bajas, lo que da como resultado sonidos más profundos y fuertes,
                como fuertes cascadas, rugidos bajos y truenos suaves.
              </p>
              <a
                href="/dashboard/ejercicios/musicoterapia/ruido_marron"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-400 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-700"
              >
                Leer Mas
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <br />
        </div>
        {/* <div className="h-32 p-6 bg-violet-300">Footer</div> */}
      </div>
    </Layout>
  );
};

export default Dashboard;
