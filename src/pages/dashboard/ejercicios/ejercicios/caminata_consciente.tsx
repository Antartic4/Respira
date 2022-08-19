import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { stringify } from "querystring";
import Layout from "../../../../common/components/Layout";
import Image from "next/image";

import cc1 from "../../../../common/pics/cc1.jpg";
import { requireAuth } from "../../../../common/requireAuth";

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} };
});

const Dashboard: NextPage = () => {
  const { data } = useSession();

  return (
    <Layout>
      <>
        <br />
        <div className="bg-violet-300">
          <h1 className="text-4xl font-bold text-white">Caminata Consciente</h1>
          <div className="flex-wrap bg-violet-300">
            <br />
            {/* div de ruido browniano */}
            <div className="flex flex-col items-center justify-center">
              <div className="items-center object-fill bg-white rounded-lg shadow-lg sm:w-4/6">
                <br />
                <div className="text-center">
                  <Image
                    className="ml-auto mr-auto rounded-2xl rounded-w-lg"
                    src={cc1}
                    alt="Caminata Conciente"
                    width={400}
                    height={300}
                  />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-2xl font-medium text-gray-900">
                    ¿Qué es una caminata consciente?
                  </h5>
                  <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                    La caminata consciente combina dos métodos importantes para
                    desestresarse: el movimiento, preferiblemente al aire libre,
                    y la atención plena. Como cualquier actividad nueva, tendrás
                    que practicar la caminata consciente para dominarla. Pero
                    una vez que pueda enfocar rápidamente su atención en su
                    respiración y movimiento, disfrutará de los muchos
                    beneficios físicos y mentales que se obtienen al caminar con
                    atención plena. Una vez que se sienta cómodo con la caminata
                    consciente, intente incorporar otros momentos de atención
                    plena en su día.
                  </p>
                  <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                    Se ha demostrado que la actividad física, incluso si es
                    caminar, estabiliza el ritmo cardíaco, reduce la presión
                    arterial y reduce las hormonas que inducen el estrés, como
                    el cortisol y la adrenalina. Además de los beneficios de
                    caminar, la atención plena también tiene beneficios que
                    pueden mejorar tu cuerpo y tu mente.
                  </p>
                  <h5 className="mb-2 text-2xl font-medium text-gray-900">
                    ¿Cómo puedo empezar?
                  </h5>
                  <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                    Seis pasos para practicar la caminata consciente:
                  </p>

                  <p className="px-4">
                    1. Antes de comenzar a caminar, quédese quieto por unos
                    momentos, concentrándose en su respiración. Toma nota de
                    cómo se siente todo tu cuerpo.
                    <br /> <br />
                    2. A medida que comience a caminar, preste toda su atención
                    a los movimientos y sensaciones de su cuerpo.
                    <br /> <br />
                    3. Observe la forma en que lleva su cuerpo: las sensaciones
                    en sus pies, piernas, brazos, pecho y cabeza. <br /> <br />
                    4. Una vez que te hayas conectado con las sensaciones de tu
                    cuerpo, comienza a abrir tu atención a las vistas que te
                    rodean.
                    <br /> <br />
                    5. Si te distraes con otros pensamientos, simplemente vuelve
                    a concentrarte en los movimientos de tus pies, tu
                    respiración o las sensaciones en tu cuerpo.
                    <br /> <br />
                  </p>

                  <h5 className="mb-2 text-2xl font-medium text-gray-900">
                    Reducir la velocidad
                  </h5>
                  <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                    La caminata consciente tiene como principal propósito
                    entrenar nuestra mente, no nuestras piernas y glúteos. Por
                    supuesto que el hecho de estar en movimiento tiene muchos
                    beneficios para la salud: mejorar el sistema circulatorio,
                    liberar endorfinas, etc.
                  </p>

                  <a
                    href="https://www.bioguia.com/bienestar/caminata-consciente-meditacion_31576133.html"
                    className="text-blue-600 underline"
                  >
                    Fuente!
                  </a>
                  <br />
                  <div className="flex relative w-full justify-center embed-responsive embed-responsive-21by9 top-padding:42.857143%">
                    <iframe
                      className="justify-center fill rounded-2xl rounded-w-lg"
                      src="https://www.youtube.com/embed/WkC7x9ms6u4"
                      title="MEDITACIÓN CAMINAR CONSCIENTE"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </>
    </Layout>
  );
};

export default Dashboard;
