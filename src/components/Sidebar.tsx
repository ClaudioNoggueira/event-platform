import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      slug
      title
      lessonType
      availableAt
      id
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          const { id, title, slug, availableAt, lessonType } = lesson;
          return (
            <Lesson
              key={id}
              title={title}
              slug={slug}
              availableAt={new Date(availableAt)}
              type={lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
