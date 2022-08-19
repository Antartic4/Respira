import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { stringify } from "querystring";
import Layout from "../../../../common/components/Layout";
import tecpom from "../../../../common/pics/tecnicapomodoro.png";

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
        <h1 className="text-4xl font-bold text-white">Técnica Pomodoro</h1>
        <div className="flex-wrap bg-violet-300">
          <br />
          {/* div de ruido browniano */}
          <div className="flex flex-col items-center justify-center">
            <div className="items-center object-fill bg-white rounded-lg shadow-lg sm:w-4/6">
              <br />
              <div className="text-center">
                <Image
                  className="ml-auto mr-auto rounded-2xl rounded-w-lg"
                  src={tecpom}
                  width="400px"
                  height="300px"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Técnica Pomodoro
                </h5>
                <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                  La técnica pomodoro es un marco de gestión del tiempo que
                  mejorará su enfoque y productividad. Anima a las personas a
                  trabajar con el tiempo que tienen, en lugar de en contra de
                  él.
                </p>
                <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                  La idea detrás de la técnica es que el temporizador infunde un
                  sentido de urgencia. En lugar de sentir que tiene un tiempo
                  interminable en la jornada laboral para hacer las cosas y
                  luego desperdiciar esas preciosas horas de trabajo en
                  distracciones, sabe que solo tiene 25 minutos para avanzar
                  tanto como sea posible en una tarea.
                </p>
                <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                  Además, los descansos forzados ayudan a curar esa sensación de
                  cansancio y agotamiento que la mayoría de nosotros
                  experimentamos hacia el final del día. Es imposible pasar
                  horas frente a su computadora sin siquiera darse cuenta, ya
                  que el cronómetro le recuerda que debe levantarse y tomar un
                  respiro.
                </p>

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  ¿Para qué sirve la Técnica Pomodoro?
                </h5>

                <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                  La técnica pomodoro es popular entre los estudiantes que
                  desean estudiar de manera más efectiva y cualquiera que busque
                  mejorar en el trabajo o en sus proyectos personales.
                </p>

                <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                  “El perfeccionismo impide la acción. Esperar hasta haber
                  ideado la solución perfecta para algo es simplemente una forma
                  de procrastinación”.
                </p>
                <p className="px-2"> ― Staffan Noteberg.</p>
                <br />
                <p className="mb-5 ml-5 text-base text-gray-700 indent-10">
                  Con este método, divide su jornada laboral en partes de 25
                  minutos separadas por descansos de cinco minutos. Estos
                  intervalos se conocen como pomodoros. Después de unos cuatro
                  pomodoros, se toma un descanso más largo de unos 15 a 20
                  minutos.
                </p>

                <a
                  href="https://www.wrike.com/blog/what-is-pomodoro-technique-how-it-works/#What-is-the-Pomodoro-Technique"
                  className="text-blue-600 underline"
                >
                  Fuente!
                </a>
                <br />
                <br />
                <Link href="/dashboard/ejercicios/ejercicios/tecnica_pomodoro/herramienta_pomodoro">
                  <a>
                    <div className="w-1/2 mx-auto mb-10 text-2xl text-center text-white rounded-xl bg-violet-600">
                      Click para ejercicio
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </Layout>
  );
};

export default Dashboard;
