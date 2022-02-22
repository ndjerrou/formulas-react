import React from "react";

export default function Input({ desc, value, onChange, label, type }) {
  return (
    <div>
      <label htmlFor={desc}>{label}</label>
      <input
        id={desc}
        value={value}
        onChange={onChange}
        name={desc}
        type={type}
      />
    </div>
  );
}
