import { CaretRight, FileArrowDown, Image } from "phosphor-react";
import Button from "./Button";
import { VideoCard } from "./VideoCard";

export default function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="bg-zinc-500 h-full w-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16 mb-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">
              Aula 01 - Abertura do evento Ignite Lab
            </h1>
            <p className="text-gray-400 leading-relaxed">
              Na aula 1 você vai entender quais são as oportunidades que você
              pode ter se especializando em ReactJS e porque essa é a decisão
              mais inteligente pra sua carreira no momento! E também vamos dar
              início ao projeto que vamos desenvolver nessa semana: uma
              plataforma de conteúdos em vídeo. Bora codar!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              href="#"
              text="Comunidade do Discord"
              icon="Discord"
              className="bg-green-500 hover:bg-green-700 transition-colors"
            />

            <Button
              href="#"
              text="Acesse o desafio"
              icon="Lightning"
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 mb-20">
          <img
            className="h-16 w-16 rounded-full border-2 border-blue-500"
            src="https://github.com/ClaudioNoggueira.png"
            alt="Teacher photo"
          />
          <div className="leading-relaxed">
            <strong className="font-bold text-2xl block">
              Claudio Vinicius Nogueira
            </strong>
            <span className="text-gray-200 text-sm block">
              Back-End Developer
            </span>
          </div>
        </div>

        <div className="gap-8 grid grid-cols-2">
          <VideoCard
            strongText="Material complementar"
            pText="Acesse o material complementar para acelerar o seu desenvolvimento"
            icon="FileArrowDown"
          />
          <VideoCard
            strongText="Wallpapers exclusivos"
            pText="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
              máquina"
            icon="Image"
          />
        </div>
      </div>
    </div>
  );
}
