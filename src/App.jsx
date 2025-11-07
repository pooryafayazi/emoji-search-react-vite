// src\App.jsx
import { useEffect, useMemo, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import EmojiList from "./components/EmojiList.jsx";
import useDebounce from "./hooks/useDebounce.js";
import { filterEmojis } from "./lib/filter.jsx";
import "./App.css";


export default function App() {
  const [emojis, setEmojis] = useState([]);
  const [q, setQ] = useState("");
  const dq = useDebounce(q, 250);

  useEffect(() => {
    fetch("/emojiList.json")
      .then(r => r.json())
      .then(setEmojis)
      .catch(console.error);
  }, []);

  const results = useMemo(() => filterEmojis(emojis, dq), [emojis, dq]);

  return (
    <main className="container">
      <h1>Emoji Search</h1>
      <SearchBar value={q} onChange={setQ} />
      <p className="muted">Total: {emojis.length} • Showing: {results.length}</p>
      <EmojiList items={results} term={dq} />
    </main>
  );
}