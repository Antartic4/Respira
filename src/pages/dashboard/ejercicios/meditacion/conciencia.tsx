import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { stringify } from "querystring";
import Layout from "../../../../common/components/Layout";
import imagen from "../../../../common/pics/conciencia.jpg";
import Image from "next/image";

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
        <h1 className="text-4xl font-bold text-white">
          Meditación de Conciencia
        </h1>
        <div className="flex-wrap bg-violet-300">
          <br />
          {/* div de ruido blanco */}
          <div className="flex flex-col items-center justify-center">
            <div className="items-center object-fill bg-white rounded-lg shadow-lg sm:w-4/6">
              <br />
              <Image
                className="ml-auto mr-auto rounded-2xl rounded-w-lg"
                src="https://i.pinimg.com/originals/9a/50/6f/9a506fd9ff749ce3c477e26a9247f751.jpg"
                width="400px"
                height="300px"
                alt=""
              />
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-medium text-gray-900">
                  Ejercicio de Meditación de Atención Plena
                </h5>
                <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                  Este ejercicio enseña meditación básica de atención plena.
                </p>
                <p>
                  1. Siéntese en una silla de respaldo recto o con las piernas
                  cruzadas en el suelo. <br /> <br />
                  2. Concéntrese en el aspecto de su respiración, como las
                  sensaciones del aire que fluye hacia sus fosas nasales y salen
                  de su boca, o su vientre subiendo y bajando mientras inhala y
                  exhala. Repita esto 5 veces. <br /> <br />
                  3. Una vez que haya estrechado su concentración de esta
                  manera, comience a ampliar su enfoque. <br /> <br />
                  4. Tome conciencia de los sonidos, las sensaciones y las
                  ideas. <br /> <br />
                  5. Aproveche este ritmo y considere cada pensamiento o
                  sensación sin juzgar lo bueno o lo malo. Deje que su mente
                  fluya.
                  <br /> <br />
                  6. Si su mente comienza a acelerarse, vuelva a concentrarse en
                  su respiración. Luego expande su conciencia de nuevo.
                </p>
                <br />
                <h5 className="mb-2 text-2xl font-medium text-gray-900">
                  Beneficios de Ejercicios de Atención
                </h5>
                <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                  Los beneficios de la meditación de atención plena tienden a
                  estar relacionados con la duración y la frecuencia de su
                  práctica: cuanto más los hace, mayor es el efecto que suele
                  tener. Se ha demostrado que los tratamientos basados en la
                  atención plena reducen la ansiedad y la depresión. También hay
                  evidencia de que la atención plena puede reducir la presión
                  arterial y mejorar el sueño. Incluso puede ayudar a las
                  personas a sobrellevar el dolor
                </p>
                <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                  La mayoría de las personas descubren que la mente tarda al
                  menos 20 minutos en comenzar a asentarse, por lo que esta es
                  una forma razonable de comenzar. Si está listo para un
                  compromiso más serio, puede comenzar practicando las técnicas
                  descritas aquí por períodos más cortos y aun así obtener un
                  beneficio.
                </p>
                <div className="flex relative w-full justify-center embed-responsive embed-responsive-21by9 top-padding:42.857143%">
                  <iframe
                    className="justify-center fill rounded-2xl rounded-w-lg"
                    src="https://www.youtube.com/embed/pf1wCDm45I8"
                    title="Meditación Guiada: Mindfulness para desarrollar Conciencia Plena sobre tus Pensamientos"
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
    </Layout>
  );
};

export default Dashboard;
