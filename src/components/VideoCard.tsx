import { CaretRight, FileArrowDown, Image } from "phosphor-react";

interface VideoCardProps {
  strongText: string;
  pText: string;
  icon?: string;
}

export function VideoCard(props: VideoCardProps) {
  const icon = props.icon?.toUpperCase();
  const { strongText, pText } = props;

  return (
    <a
      className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
      href="#"
    >
      <div className="bg-green-700 h-full p-6 flex items-center">
        {icon === "FILEARROWDOWN" ? <FileArrowDown size={40} /> : ""}
        {icon === "IMAGE" ? <Image size={40} /> : ""}
      </div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl mb-2 block">{strongText}</strong>
        <p className="text-sm text-gray-200 mt-2">{pText}</p>
      </div>
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
