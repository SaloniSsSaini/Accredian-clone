export default function Container({
  children,
  className = "",
  as: Component = "div",
  size = "default",
}) {
  const sizes = {
    small: "max-w-4xl",
    default: "max-w-6xl",
    large: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <Component
      className={`${sizes[size]} mx-auto px-6 md:px-10 lg:px-16 ${className}`}
    >
      {children}
    </Component>
  );
}