export default function Container({ children, className = "", as: As = "div" }) {
  return <As className={`container-x ${className}`}>{children}</As>;
}
