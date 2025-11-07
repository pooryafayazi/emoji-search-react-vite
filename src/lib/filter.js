// src\lib\filter.js

export function filterEmojis(list, q) {
  const term = (q ?? "").trim().toLowerCase();
  if (!term) return list;
  return list.filter(e =>
    (`${e.title} ${e.keywords ?? ""}`).toLowerCase().includes(term)
  );
}
