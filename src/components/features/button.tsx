// features/button.tsx
import { Link } from "react-router-dom";

interface ButtonProps {
  to: string;
  title: string;
  style?: string;
  children?: React.ReactNode;
}

export function Button({ to, title, style, children }: ButtonProps) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center text-center transition-all duration-300 ${style}`}
    >
      {children || title}
    </Link>
  );
}