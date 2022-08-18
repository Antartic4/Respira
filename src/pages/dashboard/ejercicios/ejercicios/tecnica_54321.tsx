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
          <h1 className="text-4xl font-bold text-white">Método 5-4-3-2-1</h1>
          <div className="flex-wrap bg-violet-300">
            <br />
            {/* div de ruido browniano */}
            <div className="flex flex-col items-center justify-center">
              <div className="items-center object-fill bg-white rounded-lg shadow-lg sm:w-4/6">
                <br />
                <img
                  className="ml-auto mr-auto rounded-2xl rounded-w-lg"
                  src="https://i.pinimg.com/originals/87/64/bc/8764bc4027ca56a89247ec5602431db3.jpg"
                  width="400px"
                  height="300px"
                  alt=""
                />
                <div className="p-6">
                  <h5 className="mb-2 text-2xl font-medium text-gray-900">
                    ¿Cómo ayuda el Método 54321 con la Ansiedad?
                  </h5>
                  <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                    Se trata de una técnica que utiliza nuestros sentidos para
                    ayudarnos a distraer la mente de nuestras emociones no
                    deseadas y situarnos en el momento presente.
                  </p>
                  <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                    Esta técnica es una de las muchas opciones que podría usar
                    si se siente ansioso o abrumado. Si la ansiedad es algo con
                    lo que lucha regularmente y continúa teniendo problemas para
                    enfocarse o sobrellevar estos sentimientos, hable con su
                    médico
                  </p>
                  <h5 className="mb-2 text-2xl font-medium text-gray-900">
                    Cómo Anclarse con el Método 54321
                  </h5>
                  <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                    Trabajando hacia atrás desde 5, usa tus sentidos para hacer
                    una lista de las cosas que notas a tu alrededor. Por
                    ejemplo, puede comenzar enumerando:
                  </p>
                  <p className="px-4">
                    ¿Cuáles son las 5 cosas que puedes ver? Busque pequeños
                    detalles, como un patrón en el techo, la forma en que la luz
                    se refleja en una superficie o un objeto que nunca notó.
                    <br /> <br />
                    ¿Cuáles son las 4 cosas que puedes sentir? Note la sensación
                    de la ropa en su cuerpo, el sol en su piel o la sensación de
                    la silla en la que está sentado. Tome un objeto y examine su
                    peso, textura y otras cualidades físicas.
                    <br /> <br />
                    ¿Cuáles son las 3 cosas que puedes escuchar? Preste especial
                    atención a los sonidos que su mente ha dejado de escuchar,
                    como el tictac de un reloj, el tráfico distante o los
                    árboles que se mueven con el viento. <br /> <br />
                    ¿Cuáles son 2 cosas que puedes oler? Trate de notar los
                    olores en el aire a su alrededor, como un ambientador o
                    césped recién cortado. También puede buscar algo que tenga
                    olor, como una flor o una vela apagada.
                    <br /> <br />
                    ¿Qué es 1 cosa que puedes saborear? Lleve chicles, dulces o
                    bocadillos pequeños para este paso. Métete uno en la boca y
                    centra tu atención en los sabores.
                    <br /> <br />
                  </p>

                  <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                    Haz un esfuerzo por notar las pequeñas cosas a las que no
                    siempre prestas atención, como el color de las motas en la
                    alfombra o el zumbido de tu computadora.
                  </p>

                  <a
                    href="https://www.hope-therapy-center.com/single-post/2016/04/06/54321-method-to-reduce-anxiety"
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
