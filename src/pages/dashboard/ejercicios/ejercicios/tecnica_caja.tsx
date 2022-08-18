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
        <br />
        <div className="bg-violet-300">
          <h1 className="text-4xl font-bold text-white">Respiración de Caja</h1>
          <div className="flex-wrap bg-violet-300">
            <br />
            {/* div de ruido browniano */}
            <div className="flex flex-col items-center justify-center">
              <div className="items-center object-fill bg-white rounded-lg shadow-lg sm:w-4/6">
                <br />
                <img
                  className="ml-auto mr-auto rounded-2xl rounded-w-lg"
                  src="https://i.pinimg.com/originals/29/67/18/296718947338aa177edea4f68ca3d84f.jpg"
                  width="400px"
                  height="300px"
                  alt=""
                />
                <div className="p-6">
                  <h5 className="mb-2 text-2xl font-medium text-gray-900">
                    Cómo funciona la respiración de caja
                  </h5>
                  <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                    La respiración de caja, también conocida como respiración de
                    cuatro cuadrados, implica exhalar contando hasta cuatro,
                    mantener los pulmones vacíos contando hasta cuatro, inhalar
                    al mismo ritmo y retener el aire en los pulmones contando
                    hasta cuatro antes de exhalar y comenzar. el patrón de
                    nuevo.
                  </p>
                  <h5 className="mb-2 text-2xl font-medium text-gray-900">
                    Beneficios de la respiración de caja
                  </h5>
                  <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                    La respiración de caja puede ser útil en muchas situaciones,
                    tales como:
                  </p>

                  <p className="px-4">
                    1. Puede ayudarlo a sobrellevar el pánico y el estrés cuando
                    se siente abrumado. Contar ayuda a desviar la atención de la
                    situación que produce el pánico, permitiéndole manejar y
                    controlar su respuesta. <br /> <br />
                    2. Te ayuda a dormir cuando tienes insomnio. <br /> <br />
                    3. Ayuda a controlar la hiperventilación ya que puede
                    instruir a sus pulmones para que estos respiren
                    rítmicamente. <br /> <br />
                    4. Le ayuda a re-enfocarse cuando tiene un día ajetreado o
                    estresante.
                    <br /> <br />
                    5. Alivia el pánico y la preocupación.
                    <br /> <br />
                    6. Te mantiene tranquilo mientras te preparas para el día.{" "}
                    <br /> <br />
                    7. Al tomar una gran decisión. <br /> <br />
                    8. Reduce la presión arterial y disminuye el cortisol, una
                    hormona del estrés, lo que puede mejorar su estado de ánimo.
                    <br /> <br />
                  </p>

                  <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                    La respiración de caja no conlleva los beneficios físicos
                    del ejercicio o los beneficios mentales y de resiliencia a
                    largo plazo de la meditación, pero definitivamente tiene su
                    lugar como técnica de manejo del estrés. Por un lado, es muy
                    simple de aprender y practicar. 1﻿﻿ Además, se puede
                    practicar prácticamente en cualquier lugar y en cualquier
                    momento, mientras se ducha, mira televisión o incluso
                    trabaja.
                  </p>

                  <h5 className="mb-2 text-2xl font-medium text-gray-900">
                    Consejos para la respiración de caja
                  </h5>

                  <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                    Si eres nuevo en esta técnica de respiración, ten en cuenta
                    que, si 4 segundos es demasiado, puede comenzar con 2 o 3
                    segundos para ayudarlo a comenzar a practicar.Cuente los
                    segundos en su cabeza si es difícil encontrar el ritmo.
                    Asegúrate de estar cómodo. Es más fácil concentrarse en la
                    respiración cuando está relajado y en una posición cómoda.
                  </p>

                  <a
                    href="https://www.webmd.com/balance/what-is-box-breathing"
                    className="text-blue-600 underline"
                  >
                    Fuente!
                  </a>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </>
    </Layout>
  );
};

export default Dashboard;
