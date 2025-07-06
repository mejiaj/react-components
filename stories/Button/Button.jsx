import "./button.css";

export function Button({
  variant = "default",
  primary = false,
  size = "medium",
  label,
  ...props
}) {
  return (
    <button
      type="button"
      className={[
        "rc-button",
        `rc-button--${variant ? variant : "default"}`,
        `rc-button--${size}`,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
}
