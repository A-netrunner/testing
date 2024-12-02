// OutlineButton.jsx
import React from "react";

export default function OutlineButton({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-100 ${className}`}
    >
      {children}
    </button>
  );
}
