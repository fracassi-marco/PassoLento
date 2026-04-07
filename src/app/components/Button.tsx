import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "neutral" | "ghost" | "filter";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: string; // Font Awesome class name (e.g., "fa-mountain")
  iconPosition?: "left" | "right";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  active?: boolean; // For filter buttons
  download?: string | boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "left",
  href,
  onClick,
  className = "",
  disabled = false,
  active = false,
  download,
}: ButtonProps) {
  const baseClasses = "btn";
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const activeClass = active ? "active" : "";
  const classes = `${baseClasses} ${variantClass} ${sizeClass} ${activeClass} ${className}`.trim();

  const iconElement = icon && (
    <i className={`fas ${icon}`} aria-hidden="true"></i>
  );

  const content = (
    <>
      {icon && iconPosition === "left" && iconElement}
      <span>{children}</span>
      {icon && iconPosition === "right" && iconElement}
    </>
  );

  if (href && !disabled) {
    // Se ha download oppure inizia con http o https, usa un tag <a> normale
    if (download || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classes}
          target={download ? undefined : "_blank"}
          rel={download ? undefined : "noopener noreferrer"}
          download={download || undefined}
        >
          {content}
        </a>
      );
    }
    // Altrimenti usa Next.js Link
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {content}
    </button>
  );
}
