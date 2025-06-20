import React from 'react';

import "./button.css";

export function Button({
  primary = false,
  backgroundColor = null,
  size = "medium",
  label,
  ...props
}) {
  const mode = primary
    ? "rc-button--primary"
    : "rc-button--secondary";
  return (
    <button
      type="button"
      className={["rc-button", `rc-button--${size}`, mode].join(
        " ",
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}
