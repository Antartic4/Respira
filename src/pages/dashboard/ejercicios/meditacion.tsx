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
      <>
        <br />
        <br />
        <h1 className="text-4xl font-bold text-white">Meditacion</h1> <br />
        <h1 className="text-2xl font-bold text-white">
          Ejericios de Meditacion Guiada
        </h1>
        <br />
        <div className="bg-purple-200">
          <br />
          {/* div de ruido rosa */}
          <div className="flex justify-center">
            <div className="items-center object-fill w-4/6 bg-white rounded-lg shadow-lg">
              <br />
              <h5 className="p-6 text-2xl font-medium text-center text-gray-900">
                Meditación guiada para la ansiedad
              </h5>
              <h5 className="mb-2 text-2xl font-medium text-gray-900">
                ¿Puede la meditación guiada ayudar con la ansiedad?
              </h5>
              <p className="p-6 text-base text-gray-700 indent-5">
                "Si de hecho, una de las principales razones para empezar
                cualquier práctica de meditación, en general, es reducir el
                estrés y la ansiedad en tu vida. Estos son sólo algunos de los
                beneficios de la meditación. La meditación guiada es el lugar
                perfecto para empezar, ya que pone la responsabilidad de
                organizar y programar la sesión de meditación en alguien que ha
                aprendido y practicado el método. Sin embargo, antes de seguir
                adelante, definamos la ansiedad en general."
              </p>
              <p className="pr-10 font-bold text-right">-Anahana</p>
              <br />
              <a className="justify-center" href="#!">
                <img
                  className="justify-center mx-auto rounded-2xl rounded-w-lg"
                  src="https://i.ibb.co/3BPXGKV/2.png"
                  width="300px"
                  height="300px"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-medium text-gray-900">
                  ¿Puede la meditación guiada ayudar con la ansiedad?
                </h5>
                <p className="mb-3 text-base text-gray-700 indent-5">
                  La mejor manera de explicar el ruido rosa es un ruido
                  ambiental que a menudo se reproduce de fondo para ayudar a
                  concentrarse y ahogar otros sonidos que pueden interferir con
                  la concentración o el sueño. Es una versión más suave y leve
                  del ruido blanco, que generalmente consideramos similar a la
                  estática de la radio. El ruido rosa enfatiza los sonidos de
                  baja frecuencia en lugar de los sonidos de alta frecuencia.
                  WebMD lo compara con “una lluvia constante, el susurro del
                  viento entre los árboles o las olas en la playa”.
                </p>
                <p className="mb-3 text-base text-gray-700 indent-5">
                  Para muchas personas, esto es mucho más agradable de escuchar
                  durante un período de tiempo prolongado. El cuerpo humano es
                  increíble por muchas razones, pero seguramente una de las más
                  fascinantes es cómo nuestra comida capta el sonido. Cada vez
                  que escuchamos música o escuchamos el portazo de un automóvil,
                  el sonido crea vibraciones, que a su vez crean ondas en el
                  aire. Estas ondas entran en nuestros tímpanos haciéndolos
                  vibrar. Los diminutos cabellos dentro de nuestros tímpanos
                  pueden captar diferentes frecuencias y tonos del patrón de
                  vibraciones causado por las ondas. Reproducir ruido rosa crea
                  un sonido constante y relajante para que el tímpano lo capte.
                </p>
                <h5 className="mb-2 text-2xl font-medium text-gray-900">
                  Cómo el ruido rosa te ayuda a dormir
                </h5>
                <p className="mb-3 text-base text-gray-700 indent-5">
                  La razón por la que el ruido rosa es tan ideal para ayudarnos
                  a dormir es que funciona para “enmascarar” otros sonidos.
                  Cuando dormimos en silencio, las ondas sonoras del perro de un
                  vecino que ladra en la oscuridad de la noche nos despiertan
                  debido al "cambio de sonido o en el ruido", y no
                  necesariamente al sonido en sí.
                </p>
                <p className="mb-3 text-base text-gray-700 indent-5">
                  El ruido rosa es efectivo porque crea un sonido de fondo
                  constante, lo que hace que un ruido fuerte y repentino no sea
                  tan discordante para nuestros cerebros dormidos. Como
                  mencionamos anteriormente, el énfasis en los sonidos de baja
                  frecuencia en el ruido rosa es más satisfactorio para nuestros
                  cerebros dormidos, pero hay otro aspecto que lo convierte en
                  un claro ganador cuando se trata de enmascarar el ruido.
                </p>
                <p className="mb-3 text-base text-gray-700 indent-5">
                  En "The Many Colors of Sound", Meghan Neal describe el ruido
                  rosa como un "patrón" que se encuentra en algún lugar entre
                  "pura aleatoriedad y movimiento correlacionado". El hecho de
                  que el ruido rosa no sea totalmente aleatorio, pero tampoco
                  esté completamente estructurado, es parte de lo que calma
                  nuestro cerebro mientras dormimos.
                </p>
                <a
                  href="https://yogasleep.com/blogs/give-sleep-a-chance-blog/pink-noise-the-full-sound-spectrum"
                  className="text-blue-600 underline"
                >
                  Fuente!
                </a>
                <div>
                  <br />
                  <img
                    className="rounded-2xl"
                    src="https://i.ibb.co/BCm6Pr0/rosa.jpg"
                    alt=""
                  />
                  <br />
                </div>
                <div className="relative w-full justify-center embed-responsive embed-responsive-21by9 top-padding:42.857143%">
                  <iframe
                    width="275px"
                    height="275px"
                    className="justify-center mx-auto rounded-2xl rounded-w-lg"
                    src="https://www.youtube.com/embed/nYpjjLGSUNA"
                    title="Pink Noise Ambient Sound For Sleep for 5 hrs   Ruido Rosa sonido ambiental para dormir"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <br />
          {/* div de ruido browniano */}
          <div className="flex justify-center">
            <div className="items-center object-fill w-4/6 bg-white rounded-lg shadow-lg">
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
                  El ruido marrón tiene una energía aún mayor en frecuencias más
                  bajas, lo que da como resultado sonidos más profundos y
                  fuertes, como fuertes cascadas, rugidos bajos y truenos
                  suaves.
                </p>
                <p className="mb-3 text-base text-gray-700 indent-5">
                  "Al igual que el ruido rosa, el ruido marrón contiene sonidos
                  de cada octava del espectro sonoro, pero la potencia detrás de
                  las frecuencias disminuye con cada octava", explica Sleep
                  Foundation en su sitio web.
                </p>
                <p className="mb-3 text-base text-gray-700 indent-5">
                  "Esta disminución es el doble que la del ruido rosa, lo que da
                  como resultado un sonido que la gente percibe como más
                  profundo que el ruido blanco o el rosa"..
                </p>
                <h5 className="mb-2 text-2xl font-medium text-gray-900">
                  ¿Cuál es la diferencia entre el ruido marrón y el blanco?
                </h5>
                <p className="mb-3 text-base text-gray-700 indent-5">
                  En contraste con el ruido blanco, que contiene todas las
                  frecuencias de sonido, el ruido marrón se define por su tono
                  más bajo y graves añadidos. Algunos lo describen como una
                  reminiscencia del interior de un avión, un torrente de agua o
                  un túnel de viento. Si no encuentra el ruido blanco
                  particularmente relajante, el ruido marrón podría ser una
                  alternativa más atractiva.
                </p>
                <p className="mb-3 text-base text-gray-700 indent-5">
                  Algunas investigaciones científicas específicas del ruido
                  marrón aún se encuentran en las etapas preliminares, pero no
                  faltan testimonios en Internet de personas que afirman que el
                  sonido ha mejorado su concentración y despejado su mente.
                </p>
                <a
                  href="https://www.outsideonline.com/health/wellness/brown-noise-sleep-relaxation/"
                  className="text-blue-600 underline"
                >
                  Fuente!
                </a>
                <div>
                  <br />
                  <img
                    className="rounded-2xl"
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
                    src="https://www.youtube.com/embed/nYpjjLGSUNA"
                    title="Pink Noise Ambient Sound For Sleep for 5 hrs   Ruido Rosa sonido ambiental para dormir"
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
      </>
    </Layout>
  );
};

export default Dashboard;
