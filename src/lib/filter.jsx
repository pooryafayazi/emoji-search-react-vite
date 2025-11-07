// src\lib\filter.js
export function filterEmojis(list, q) {
  const term = (q ?? "").trim().toLowerCase();
  if (!term) return list;
  return list.filter(e =>
    (`${e.title} ${e.keywords ?? ""}`).toLowerCase().includes(term)
  );
}

export function highlight(text, term) {
  if (!term) return text;
  const esc = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${esc})`, "ig");
  return String(text).split(re).map((part, i) =>
    part.toLowerCase() === term.toLowerCase()
      ? <mark key={i}>{part}</mark>
      : <span key={i}>{part}</span>
  );
}
