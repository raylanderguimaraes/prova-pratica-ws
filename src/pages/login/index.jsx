import { useState } from "react";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import Link from "next/link";
import Layout from "../Layout";
import LoginCard from "@/components/LoginCard";
import InputForm from "@/components/InputForm";

export default function Login() {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleFormEdit = (event, name) => {
    setFormdata({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`/api/user/login`, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      if (response.status !== 200) throw new Error(json);
      setCookie("authorization", json);
      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };


  // funcao para determinar variavel que mostra senha ou nao
    const [isShown, setIsShown] = useState(false);

  // funcao que é chamada quando o checkbox e marcada ou desmarcada
    const togglePassword = () =>{
      setIsShown((isShown)=> !isShown);
    }

  return (
    <Layout>
      <div className="h-screen flex flex-col items-center justify-center">
        <LoginCard title="Login">
          <form
            className="flex flex-col gap-2 bg-red-100 rounded-md mb-10"
            onSubmit={handleForm}>
            <InputForm
              type="text"
              placeholder="Seu e-mail"
              required
              value={formData.email}
              onChange={(e) => {
                handleFormEdit(e, "email");
              }}
            />
            <InputForm
              type={isShown? "text" : "password"}
              placeholder="Senha"
              required
             
              value={formData.password}
              onChange={(e) => {
                handleFormEdit(e, "password");
              }}
            />

            <div className="checkbox-container flex gap-3">
              <label htmlFor="checkbox">Mostrar senha?</label>
              <input
                id="checkbox"
                type="checkbox"
                checked={isShown}
                onChange={togglePassword}
              />
            </div>

            <button className="bg-zinc-900 mt-2 text-zinc-100 py-2 rounded-md hover:bg-zinc-800">
              Entrar
            </button>
            {error && (
              <p className="text-red-700 text-xl font-semibold text-center">
                Erro: {error}
              </p>
            )}
          </form>
        </LoginCard>
        <Link
          href="/register"
          className=" text-blue-500 hover:text-blue-400 hover:underline">
          Cadastrar Usuário
        </Link>
        <Link
          href="/"
          className=" text-blue-500 hover:text-blue-400 hover:underline">
          Voltar para Home
        </Link>
      </div>
    </Layout>
  );
}
