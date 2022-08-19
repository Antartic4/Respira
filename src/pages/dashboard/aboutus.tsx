import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { stringify } from "querystring";
import Layout from "../../common/components/Layout";
import Image from "next/image";

import { requireAuth } from "../../common/requireAuth";

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});

const Dashboard: NextPage = () => {
  const { data } = useSession();

  return (
    <>
      <Layout>
        <div className="flex flex-col min-h-screen text-center bg-purple-300">
          <div className="h-24 p-6">
            <title>Respira App - About Us</title>
          </div>
          <div className="flex-grow p-6 bg-purple-300">
            <div>
              <div className="py-16 bg-purple-300 ">
                <div className="container px-6 m-auto text-gray-500 bg-purple-300 md:px-12 xl:px-0">
                  <div className="grid gap-6 mx-auto bg-purple-300 md:w-3/4 lg:w-full lg:grid-cols-3">
                    <div className="px-8 py-12 bg-white shadow-xl rounded-2xl sm:px-12 lg:px-8">
                      <div className="mb-12 space-y-4">
                        <h3 className="text-2xl font-semibold text-purple-900">
                          ¿Quienes Somos?
                        </h3>
                        <p className="mb-6">
                          Respira espera generar una conversación mucho más
                          abierta sobre la salud mental con miras a colocar las
                          necesidades psicológicas, afectivas y/o emocionales de
                          la población dominicana como prioridad. Otorgarles a
                          ustedes un espacio de aprendizaje y de ayuda para
                          superar los momentos dificiles y encontrar alguna
                          sensación de felicidad.
                        </p>
                      </div>
                      <Image
                        className="ml-auto mr-auto rounded-2xl rounded-w-lg"
                        src="https://i.ibb.co/k2XZjKY/Whats-App-Image-2022-08-17-at-3-17-23-AM.jpg"
                        alt="Picture of the author"
                        width="400px"
                        height="300px"
                        layout="responsive"
                      />
                    </div>
                    <div className="px-8 py-12 bg-white shadow-xl rounded-2xl sm:px-12 lg:px-8">
                      <div className="mb-12 space-y-4">
                        <h3 className="text-2xl font-semibold text-purple-900">
                          ¿Que hacemos?
                        </h3>
                        <p className="mb-6">
                          A traves e herramientas y textos informativos, Respira
                          puede ayudar a crear hábitos que cambien la vida de
                          sus usuarios. Los artículos incluidos y el directorio
                          de servicios disponibles en la nación pueden ayudar a
                          informar a la comunidad y a mejorar el enfoque de la
                          salud mental.
                        </p>
                      </div>
                      <Image
                        className="ml-auto mr-auto rounded-2xl rounded-w-lg"
                        src="https://i.ibb.co/ZM36mVF/Whats-App-Image-2022-08-17-at-3-17-23-AM-1.jpg"
                        width="400px"
                        height="300px"
                        alt=""
                      />
                    </div>
                    <div className="px-8 py-12 bg-white shadow-xl rounded-2xl sm:px-12 lg:px-8">
                      <div className="mb-12 space-y-4">
                        <h3 className="text-2xl font-semibold text-purple-900">
                          ¿Por que lo hacemos?
                        </h3>
                        <p className="mb-6">
                          Cada vez es mayor la cantidad de personas que padecen
                          de ansiedad, depresión o cualquier otra condición de
                          salud mental y, asimismo, aumenta nuestra probabilidad
                          de vivirlo a través de un ser querido o en carne
                          propia. Entonces, es de suma importancia apelar a la
                          empatía y trabajar en base a ella propulsando la
                          creación de programas vanguardistas que se fundamenten
                          en una situación de ‘ganar-ganar’.
                        </p>
                      </div>
                      <Image
                        className="ml-auto mr-auto rounded-2xl rounded-w-lg"
                        src="https://i.ibb.co/r25g5XX/Whats-App-Image-2022-08-17-at-3-17-23-AM-2.jpg"
                        width="400px"
                        height="300px"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
