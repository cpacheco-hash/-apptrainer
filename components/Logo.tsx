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

  // SVG logo conceptual: Entrenador con alumnos en espacio abierto
  const LogoIcon = () => (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Gradientes para diseño moderno */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#22c55e', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="trainerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#16a34a', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Círculo de fondo - representa la plaza/espacio abierto */}
      <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" opacity="0.15" />

      {/* Entrenador - figura central más grande */}
      <g transform="translate(50, 45)">
        {/* Cabeza del entrenador */}
        <circle cx="0" cy="-10" r="8" fill="url(#trainerGradient)" />
        {/* Cuerpo del entrenador */}
        <path
          d="M 0 0 L -8 18 M 0 0 L 8 18 M 0 2 L 0 12"
          stroke="url(#trainerGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Alumno 1 - Izquierda */}
      <g transform="translate(22, 52)" opacity="0.85">
        <circle cx="0" cy="-6" r="5.5" fill="#22c55e" />
        <path
          d="M 0 0 L -5 12 M 0 0 L 5 12 M 0 1 L 0 8"
          stroke="#22c55e"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Alumno 2 - Derecha */}
      <g transform="translate(78, 52)" opacity="0.85">
        <circle cx="0" cy="-6" r="5.5" fill="#3b82f6" />
        <path
          d="M 0 0 L -5 12 M 0 0 L 5 12 M 0 1 L 0 8"
          stroke="#3b82f6"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Alumno 3 - Izquierda adelante */}
      <g transform="translate(32, 65)" opacity="0.75">
        <circle cx="0" cy="-5" r="4.5" fill="#16a34a" />
        <path
          d="M 0 0 L -4 10 M 0 0 L 4 10 M 0 1 L 0 7"
          stroke="#16a34a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Alumno 4 - Derecha adelante */}
      <g transform="translate(68, 65)" opacity="0.75">
        <circle cx="0" cy="-5" r="4.5" fill="#2563eb" />
        <path
          d="M 0 0 L -4 10 M 0 0 L 4 10 M 0 1 L 0 7"
          stroke="#2563eb"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Líneas decorativas que sugieren movimiento/energía */}
      <path
        d="M 20 25 Q 15 30 18 35"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
        fill="none"
      />
      <path
        d="M 80 25 Q 85 30 82 35"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
        fill="none"
      />
    </svg>
  );

  const content = (
    <div className="flex items-center gap-3">
      {(variant === "full" || variant === "icon") && <LogoIcon />}

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
