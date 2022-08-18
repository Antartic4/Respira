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
      <br />
      <div className="bg-violet-300">
        <br />
        <h1 className="text-4xl font-bold text-white">Escaneo Corporal</h1>{" "}
        <div className="flex-wrap bg-violet-300">
          <br />
          {/* div de ruido blanco */}
          <div className="flex flex-col items-center justify-center">
            <div className="items-center object-fill bg-white rounded-lg shadow-lg sm:w-4/6">
              <br />
              <img
                className="ml-auto mr-auto rounded-2xl rounded-w-lg"
                src="https://i.pinimg.com/originals/9a/50/6f/9a506fd9ff749ce3c477e26a9247f751.jpg"
                width="400px"
                height="300px"
                alt=""
              />
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-medium text-gray-900">
                  Meditación de Escaneo Corporal
                </h5>
                <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                  La meditación de escaneo corporal es una práctica en la que
                  prestas atención a las sensaciones que ocurren en tu cuerpo.
                  Durante un escaneo corporal, usted escanea mentalmente cada
                  parte de su cuerpo desde la cabeza hasta los dedos de los
                  pies.
                </p>
                <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                  La meditación de exploración corporal puede ser muy relajante,
                  lo que significa que practicar antes de acostarse puede hacer
                  que sea más fácil conciliar el sueño y permanecer dormido.
                </p>
                <h5 className="mb-2 text-2xl font-medium text-gray-900">
                  ¿Para qué serviría la meditación corporal?
                </h5>
                <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                  Se recomienda encontrar una posición cómoda y que permita la
                  relajación del cuerpo, sentados en el suelo con la espalda
                  recta y las piernas flexionadas con cada pie encima del muslo
                  de la otra pierna (en lo que se conoce como posición de loto).
                  Una vez en esta posición se debe cerrar los ojos y dejar la
                  mente en blanco.
                </p>
                <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                  En este estado, se va a proceder poco a poco a recorrer con la
                  mente las diferentes partes del cuerpo, o grupos musculares,
                  prestando atención a las sensaciones que provienen de ellos.
                  Se trata de concentrarse en lo que el propio cuerpo nos dice,
                  a la vez que conectamos mejor con él y nos auto-observamos
                  aceptando las informaciones que de él proceden sin juzgarlas.
                  Generalmente se procede a ir subiendo desde los dedos de los
                  pies hasta la cabeza.
                </p>
                <br />
                <div className="flex relative w-full justify-center embed-responsive embed-responsive-21by9 top-padding:42.857143%">
                  <iframe
                    className="justify-center fill rounded-2xl rounded-w-lg"
                    src="https://www.youtube.com/embed/IGwjyqr7NB4"
                    title="Meditación mindfulness. ESCANER CORPORAL"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </Layout>
  );
};

export default Dashboard;
