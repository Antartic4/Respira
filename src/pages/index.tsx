import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useCallback } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, ILogin } from "../common/validation/auth";
import Layout from "../common/components/Layout";

const Home: NextPage = (props) => {
  const { register, handleSubmit } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = useCallback(async (data: ILogin) => {
    await signIn("credentials", { ...data, callbackUrl: "/dashboard" });
  }, []);

  return (
    <Layout>
      <div>
        <Head>
          <title>Respira App - Login</title>
          <meta name="description" content="Generado por Respira App" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-purple-200">
          {/* Div Mobile Reactive */}
          <div className="xl:hidden">
            <form
              className="flex items-center justify-center w-full h-screen"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="bg-purple-300 m:hidden shadow-xl card w-96">
                <div className="card-body">
                  <h2 className="card-title">¡Bienvenidos!</h2>
                  <input
                    type="email"
                    placeholder="Correo electronico"
                    className="w-full max-w-xs mt-2 input input-bordered"
                    {...register("email")}
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full max-w-xs my-2 input input-bordered"
                    {...register("password")}
                  />
                  <div className="items-center justify-between card-actions">
                    <Link href="/sign-up" className="link">
                      Crear una cuenta
                    </Link>
                    <button className="btn btn-base" type="submit">
                      Iniciar Session
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* Desktop */}
          <div className="invisible xl:visible">
            <form
              className="flex items-center justify-center w-full h-screen"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="bg-purple-300 shadow-xl card w-96">
                <div className="card-body">
                  <h2 className="card-title">¡Bienvenidos!</h2>
                  <input
                    type="email"
                    placeholder="Correo electronico"
                    className="w-full max-w-xs mt-2 input input-bordered"
                    {...register("email")}
                  />
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="w-full max-w-xs my-2 input input-bordered"
                    {...register("password")}
                  />
                  <div className="items-center justify-between card-actions">
                    <Link href="/sign-up" className="link">
                      Crear una cuenta
                    </Link>
                    <button className="btn btn-base" type="submit">
                      Iniciar Session
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
