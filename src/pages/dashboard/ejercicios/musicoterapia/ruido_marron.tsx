import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { stringify } from "querystring";
import Layout from "../../../../common/components/Layout";

import { requireAuth } from "../../../../common/requireAuth";

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
          <h1 className="text-4xl font-bold text-white">Ruido de Color</h1>{" "}
          <br />
          <h1 className="text-2xl font-bold text-white">Musica</h1>
          <br />
          <h1 className="text-2xl font-bold text-white">Ruido Browniano</h1>
          <br />
          <div className="bg-violet-300">
            <br />
            {/* div de ruido browniano */}
            <div className="flex justify-center">
              <div className="items-center object-fill w-4/6 bg-white shadow-lg rounded-2xl">
                <br />
                <a className="justify-center" href="#!">
                  <img
                    className="justify-center mx-auto rounded-2xl rounded-w-lg"
                    src="https://i.ibb.co/zFGy9sG/3.png"
                    width="300px"
                    height="300px"
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="mb-2 text-2xl font-medium text-gray-900">
                    ¿Qué es el ruido marrón?
                  </h5>
                  <p className="mb-3 text-base text-gray-700 indent-5">
                    El ruido marrón tiene una energía aún mayor en frecuencias
                    más bajas, lo que da como resultado sonidos más profundos y
                    fuertes, como fuertes cascadas, rugidos bajos y truenos
                    suaves.
                  </p>
                  <p className="mb-3 text-base text-gray-700 indent-5">
                    "Al igual que el ruido rosa, el ruido marrón contiene
                    sonidos de cada octava del espectro sonoro, pero la potencia
                    detrás de las frecuencias disminuye con cada octava",
                    explica Sleep Foundation en su sitio web.
                  </p>
                  <p className="mb-3 text-base text-gray-700 indent-5">
                    "Esta disminución es el doble que la del ruido rosa, lo que
                    da como resultado un sonido que la gente percibe como más
                    profundo que el ruido blanco o el rosa"..
                  </p>
                  <h5 className="mb-2 text-2xl font-medium text-gray-900">
                    ¿Cuál es la diferencia entre el ruido marrón y el blanco?
                  </h5>
                  <p className="mb-3 text-base text-gray-700 indent-5">
                    En contraste con el ruido blanco, que contiene todas las
                    frecuencias de sonido, el ruido marrón se define por su tono
                    más bajo y graves añadidos. Algunos lo describen como una
                    reminiscencia del interior de un avión, un torrente de agua
                    o un túnel de viento. Si no encuentra el ruido blanco
                    particularmente relajante, el ruido marrón podría ser una
                    alternativa más atractiva.
                  </p>
                  <p className="mb-3 text-base text-gray-700 indent-5">
                    Algunas investigaciones científicas específicas del ruido
                    marrón aún se encuentran en las etapas preliminares, pero no
                    faltan testimonios en Internet de personas que afirman que
                    el sonido ha mejorado su concentración y despejado su mente.
                  </p>
                  <a
                    href="https://www.outsideonline.com/health/wellness/brown-noise-sleep-relaxation/"
                    className="text-blue-600 underline"
                  >
                    Fuente!
                  </a>
                  <br />
                  <div className="justify-center mx-auto rounded-2xl rounded-w-lg">
                    <br />
                    <img
                      className="justify-center mx-auto rounded-2xl rounded-w-lg"
                      src="https://i.ibb.co/ggh5Lq9/marron.jpg"
                      alt=""
                    />
                    <br />
                  </div>
                  <div className="relative w-full justify-center embed-responsive embed-responsive-21by9 top-padding:42.857143%">
                    <iframe
                      width="275px"
                      height="275px"
                      className="justify-center mx-auto rounded-2xl rounded-w-lg"
                      src="https://www.youtube.com/embed/J84Dq4dIHUQ"
                      title="8 horas de ruido marrón para relajarte"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Dashboard;
