// src\components\Highlighter.jsx

export default function Highlighter({ text, term }) {
  if (!term) return text;
  const esc = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${esc})`, "ig");
  return String(text).split(re).map((part, i) =>
    part.toLowerCase() === term.toLowerCase()
      ? <mark key={i}>{part}</mark>
      : <span key={i}>{part}</span>
  );
}
