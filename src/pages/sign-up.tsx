import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpSchema, ISignUp } from "../common/validation/auth";
import { trpc } from "../common/client/trpc";
import Layout from "../common/components/Layout";

const SignUp: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutateAsync } = trpc.useMutation(["signup"]);

  const onSubmit = useCallback(
    async (data: ISignUp) => {
      const result = await mutateAsync(data);
      if (result.status === 201) {
        router.push("/");
      }
    },
    [mutateAsync, router]
  );

  return (
    <Layout>
    <div>
      <Head>
        <title>Respira - App</title>
        <meta name="descripcion" content="Generado por Respira-App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-purple-200">
        <form
          className="flex items-center justify-center w-full h-screen"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="bg-purple-300 shadow-xl card w-96">
            <div className="card-body">
              <h2 className="text-black card-title">¡Crear una cuenta!</h2>
              <input
                type="text"
                placeholder="Nombre de Usuario"
                className="w-full max-w-xs my-2 input input-bordered"
                {...register("username")}
              />
              <input
                type="email"
                placeholder="Correo Electronico"
                className="w-full max-w-xs input input-bordered"
                {...register("email")}
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full max-w-xs my-2 input input-bordered"
                {...register("password")}
              />
              <div className="items-center justify-between card-actions">
                <Link href="/" className="link">
                  Ir a Login
                </Link>
                <button className="btn btn-secondary" type="submit">
                  Crear Usuario
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
    </Layout>
  );
};

export default SignUp;
