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
        <br />
        <h1 className="text-4xl font-bold text-white">Ruido de Color</h1> <br />
        <h1 className="text-3xl font-bold text-white">Musica</h1>
        <br />
        <h1 className="text-2xl font-bold text-white">Ruido Blanco</h1>
        <br />
        <div className="bg-purple-200">
          <br />
          {/* div de ruido blanco */}
          <div className="flex justify-center">
            <div className="items-center object-fill w-4/6 bg-white rounded-lg shadow-lg">
              <br />
              <a className="justify-center" href="#!">
                <img
                  className="justify-center mx-auto rounded-2xl rounded-w-lg"
                  src="https://i.ibb.co/3rs4PDJ/4.png"
                  width="300px"
                  height="300px"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-medium text-gray-900">
                  Ruido Blanco Natural
                </h5>
                <p className="mb-3 text-base text-gray-700 indent-5">
                  ¿Le resulta fácil dormir una siesta en la playa o se le antoja
                  una siesta por la tarde en los días lluviosos? Los sonidos
                  relajantes de las olas del mar o las gotas de lluvia que caen
                  constantemente pueden proporcionar una canción de cuna
                  relajante en medio de un entorno ruidoso.
                </p>
                <details>
                  <summary>Leer mas?</summary>
                  <span>
                    <p className="mb-3 text-base text-gray-700 indent-5">
                      Los sonidos continuos de la naturaleza, como las cascadas,
                      la lluvia y la repetición de las olas del mar que rompen
                      suavemente, a menudo cumplen con los criterios de
                      frecuencia del ruido blanco y pueden clasificarse como
                      ruido blanco natural.
                    </p>
                    <p className="mb-3 text-base text-gray-700 indent-5">
                      Este tipo de sonido puede ayudar con la ansiedad al
                      enmascarar los sonidos irritantes y también al estimular
                      las ondas cerebrales alfa, que se han relacionado con
                      estados mentales más relajados y la reducción de la
                      ansiedad.
                    </p>
                    <p className="mb-3 text-base text-gray-700 indent-5">
                      Un ensayo clínico encontró que escuchar terapia de sonido
                      basada en la naturaleza (incluidos los sonidos de cascadas
                      y lluvia) redujo significativamente los niveles de
                      ansiedad y agitación de los pacientes con derivación
                      cardíaca durante un procedimiento médico en comparación
                      con aquellos que no recibieron terapia de sonido. Otro
                      estudio encontró que reproducir ruido blanco (como las
                      olas del mar o el agua corriente) durante 20 minutos al
                      día durante cuatro semanas redujo los comportamientos
                      agitados de los pacientes con demencia.
                    </p>
                    <p className="mb-3 text-base text-gray-700 indent-5">
                      Algunas personas tienen una menor tolerancia al ruido y
                      pueden experimentar intensas respuestas emocionales
                      negativas a determinados sonidos. Pero buscar el silencio
                      en realidad puede empeorar este problema.
                    </p>
                    <p className="mb-3 text-base text-gray-700 indent-5">
                      En cambio, la terapia de enriquecimiento de sonido a
                      menudo se recomienda para personas con tolerancia reducida
                      al sonido o que sufren tinnitus (zumbido en los oídos).
                      Por lo general, implica escuchar sonidos naturales o ruido
                      blanco de forma regular. Curiosamente, la terapia de
                      sonido puede ayudar a aliviar los síntomas al debilitar la
                      conexión entre el ruido y una respuesta automática al
                      estrés, lo que demuestra cómo el ruido controlado puede
                      ayudar a volver a entrenar nuestro cerebro para
                      interpretar el ruido de manera diferente.
                    </p>
                  </span>
                </details>
                <br />
                <h5 className="mb-2 text-2xl font-medium text-gray-900">
                  Ruido Blanco y Sueño
                </h5>
                <p className="mb-3 text-base text-gray-700 indent-5">
                  El ruido blanco hace que sea más difícil para nuestro cerebro
                  distinguir entre el ruido de fondo y los golpes repentinos en
                  la noche que pueden sacarnos de nuestro sueño. El ruido blanco
                  también puede ofrecer un ruido de "calentamiento" conveniente
                  para los ruidos más fuertes que siguen, lo que puede disminuir
                  nuestra reacción refleja normal hacia los sonidos
                  sorprendentes.
                </p>
                <details>
                  <summary>Leer mas?</summary>
                  <span>
                    <p className="mb-3 text-base text-gray-700 indent-5">
                      Muchos sonidos naturales caen en la frecuencia de lo que
                      se llama ruido rosa, un sonido ligeramente más suave que
                      el ruido blanco, que muchas personas consideran que es más
                      agradable para los oídos.
                    </p>
                    <p className="mb-3 text-base text-gray-700 indent-5">
                      Sin embargo, estar expuesto al ruido blanco a largo plazo
                      podría no ser una buena idea para la función cerebral,
                      debido a la tendencia del cerebro a adaptarse a lo que
                      escucha. "Los estudios han demostrado que la exposición a
                      señales ricas en información, como el habla o la música,
                      da forma al cerebro", dice el Dr. Attarha. "Las células
                      individuales se vuelven más especializadas, por ejemplo,
                      al responder selectivamente solo a un rango estrecho de
                      frecuencias de sonido. Por otro lado, la exposición a
                      largo plazo a señales que carecen de información, como el
                      ruido blanco aleatorio, influye en el cerebro en una
                      dirección desadaptativa."
                    </p>
                    <p className="mb-3 text-base text-gray-700 indent-5">
                      El problema, cuenta el doctor, es que la exposición al
                      ruido blanco puede decirle a nuestras células que
                      respondan a casi cualquier cosa, lo que puede alterar
                      nuestra capacidad para procesar el habla y la música.
                    </p>
                  </span>
                </details>
                <br />
                <a
                  href="https://www.spiritualityhealth.com/articles/2021/04/20/benefits-of-white-noise-for-anxiety-and-sleep"
                  className="text-blue-600 underline"
                >
                  Fuente!
                </a>
                <div className="justify-center mx-auto rounded-2xl rounded-w-lg">
                  <br />
                  <img
                    className="justify-center mx-auto rounded-2xl rounded-w-lg"
                    src="https://i.ibb.co/DwwYmWm/blanco.jpg"
                    alt=""
                  />
                  <br />
                </div>
                <div className="relative w-full justify-center embed-responsive embed-responsive-21by9 top-padding:42.857143%">
                  <iframe
                    width="275px"
                    height="275px"
                    className="justify-center mx-auto rounded-2xl rounded-w-lg"
                    src="https://www.youtube.com/embed/nMfPqeZjc2c"
                    title="White Noise Black Screen | Sleep, Study, Focus | 10 Hours"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </>
    </Layout>
  );
};

export default Dashboard;
