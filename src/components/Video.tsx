import { DefaultUi, Player, Youtube } from "@vime/react";
import { VideoCard } from "./VideoCard";
import { Button } from "./Button";

import "@vime/core/themes/default.css";
import { gql, useQuery } from "@apollo/client";

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { lessonSlug } = props;
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug,
    },
  });

  if (!data)
    return (
      <div className="flex-1">
        <p>Loading...</p>
      </div>
    );

  const {
    videoId,
    title,
    description,
    teacher: { name: teacherName, bio: teacherBio, avatarURL: teacherAvatar },
  } = data.lesson;

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16 mb-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <p className="text-gray-400 leading-relaxed">{description}</p>
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
            src={teacherAvatar}
            alt="Teacher photo"
          />
          <div className="leading-relaxed">
            <strong className="font-bold text-2xl block">{teacherName}</strong>
            <span className="text-gray-200 text-sm block">{teacherBio}</span>
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
