import React from "react";

import "./button.css";

export function Button({
  variant = "default" | "primary" | "secondary",
  primary = false,
  backgroundColor = null,
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
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}
