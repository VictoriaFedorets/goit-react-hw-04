import style from "./ErrorMessage.module.css";

export default function ErrorMessage({
  children,
  textAlign = "",
  marginBottom = "0",
}) {
  return (
    <p
      className={[
        style.text,
        style[textAlign],
        style[`marginBottom${marginBottom}`],
      ].join(" ")}
      style={{ marginBottom }}
    >
      {children}
    </p>
  );
}
