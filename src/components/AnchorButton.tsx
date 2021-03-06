import { DiscordLogo, Lightning } from "phosphor-react";

interface AnchorButtonProps {
  text: string;
  href?: string;
  icon?: string;
  className?: string;
}

export function AnchorButton(props: AnchorButtonProps) {
  const { text, href, className, icon } = props;

  return (
    <a
      href={href}
      className={`p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center cursor-pointer ${className}`}
    >
      {icon?.toUpperCase() === "DISCORD" ? <DiscordLogo size={24} /> : ""}
      {icon?.toUpperCase() === "LIGHTNING" ? <Lightning size={24} /> : ""}
      {text}
    </a>
  );
}
