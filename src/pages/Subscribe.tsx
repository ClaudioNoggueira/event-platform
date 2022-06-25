import { FormEvent, useState } from "react";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { useNavigate } from "react-router-dom";

export function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const navigate = useNavigate();

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma
            <strong className="text-blue-500"> aplicação completa</strong>, do
            zero, com
            <strong className="text-blue-500"> React</strong>
          </h1>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              onChange={(event) => setName(event.target.value)}
              className="bg-gray-900 rounded gap-2 px-5 h-14"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Seu nome completo"
            />
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="bg-gray-900 rounded gap-2 px-5 h-14"
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu email"
            />

            <button
              className="text-sm rounded font-bold uppercase gap-2 cursor-pointer mt-4 bg-green-500 py-4 hover:bg-green-700 hover:transition-colors disabled:opacity-50"
              disabled={loading}
              type="submit"
            >
              Garantir a minha vaga
            </button>
          </form>
        </div>
      </div>

      <img
        src="/src/assets/cover-mockup.png"
        alt="cover-mockup image"
        className="mt-10"
      />
    </div>
  );
}
