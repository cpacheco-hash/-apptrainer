import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon" | "text";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
}

const sizeMap = {
  sm: { icon: 32, text: "text-lg" },
  md: { icon: 48, text: "text-2xl" },
  lg: { icon: 64, text: "text-4xl" },
  xl: { icon: 96, text: "text-6xl" },
};

export default function Logo({ variant = "full", size = "md", href = "/" }: LogoProps) {
  const { icon: iconSize, text: textSize } = sizeMap[size];

  const content = (
    <div className="flex items-center gap-3">
      {(variant === "full" || variant === "icon") && (
        <div
          className="rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0"
          style={{ width: iconSize, height: iconSize }}
        >
          <span className={`text-white font-bold ${size === "sm" ? "text-sm" : size === "md" ? "text-xl" : size === "lg" ? "text-3xl" : "text-5xl"}`}>
            AT
          </span>
        </div>
      )}

      {(variant === "full" || variant === "text") && (
        <div className="flex flex-col">
          <span className={`font-bold text-gray-900 ${textSize} leading-none`}>
            AppTrainer
          </span>
          {size !== "sm" && (
            <span className="text-xs text-gray-500 mt-1">
              Entrena donde quieras
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center hover:opacity-80 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
