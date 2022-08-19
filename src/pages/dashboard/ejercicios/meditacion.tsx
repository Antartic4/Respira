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
    <>
      <Layout>
        <div className="flex flex-col min-h-screen text-center">
          <div className="h-24 p-6 bg-violet-300">
            <h1 className="text-3xl font-bold text-white">Meditación</h1>
          </div>
          <div className="w-3/4 mx-auto bg-white border rounded-2xl inset-y-96 px-9 border-2xl">
            <h5 className="mb-3 text-2xl font-medium text-gray-900">
              <br />
              Observar de manera objetiva los pensamientos propios
            </h5>
            <p className="mb-5 ml-5 text-black indent-10">
              Cuando sientes un alto nivel de estrés, una técnica que funciona
              muy bien es alejarte de tus pensamientos, de lo que te preocupa, y
              observarlos de manera objetiva, en la distancia. Se trata de
              parar, sentarse y observar tus pensamientos sin implicarte en
              ellos. Así conseguirás disminuir su intensidad y ver las cosas
              desde otra perspectiva.
            </p>
            <h1 className="mb-5 ml-5 text-base text-black left indent-10">
              En muchas ocasiones, solo hace falta ver lo que sucede desde otro
              prisma para poder tomar conciencia del problema o la preocupación
              y darle solución. Nuestra mente necesita estar en el momento
              presente, necesita estar relajada y tranquila para canalizar las
              emociones y el punto de vista de cada situación. El mindfulness
              nos ayuda a controlar nuestra mente, nuestros pensamientos, a
              relajarnos y a mantener un equilibrio interno.
            </h1>
          </div>
          <br />
          {/* Contenido */}
          <div className="items-center justify-evenly xl:flex 2xl:flex lg:flex sm:flex-grow md:flex-grow bg-violet-300">
            {/* div 1 Rudio Rosa*/}
            <div className="w-screen max-w-sm px-3 pt-4 mx-auto border border-gray-500 shadow-md bg-gradient-to-r to-orange-300 from-orange-100 rounded-2xl dark:bg-gray-800 dark:border-gray-700 sm:w-screen">
              <picture>
                <source
                  srcSet="https://i.pinimg.com/originals/c0/0c/a1/c00ca157fa1cc68bddee1377d465aa50.jpg"
                  type="image/webp"
                />
                <img
                  src="https://i.pinimg.com/originals/c0/0c/a1/c00ca157fa1cc68bddee1377d465aa50.jpg"
                  className="rounded-2xl"
                  alt="title"
                />
              </picture>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Meditación de Conciencia
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  La mayoría de las personas descubren que la mente tarda al
                  menos 20 minutos en comenzar a asentarse, por lo que esta es
                  una forma razonable de comenzar.
                </p>
                <Link href="/dashboard/ejercicios/meditacion/conciencia">
                  <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-400 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-700">
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
                </Link>
              </div>
            </div>
            <br />
            {/* div 2 */}
            <div className="w-screen max-w-sm px-3 pt-4 mx-auto border border-gray-500 shadow-md bg-gradient-to-r to-orange-300 from-orange-100 rounded-2xl dark:bg-gray-800 dark:border-gray-700 sm:w-screen">
              <picture>
                <source
                  srcSet="https://i.pinimg.com/originals/9a/50/6f/9a506fd9ff749ce3c477e26a9247f751.jpg"
                  type="image/webp"
                />
                <img
                  src="https://i.pinimg.com/originals/9a/50/6f/9a506fd9ff749ce3c477e26a9247f751.jpg"
                  className="rounded-2xl"
                  alt="title"
                />
              </picture>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Meditación de Escaneo Corporal
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  La meditación de escaneo corporal es una práctica en la que
                  prestas atención a las sensaciones que ocurren en tu cuerpo.
                </p>
                <Link href="/dashboard/ejercicios/meditacion/corporal">
                  <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-400 rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-700">
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
                </Link>
              </div>
            </div>
            <br />
          </div>
          {/* <div className="h-32 p-6 bg-violet-300">Footer</div> */}
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
