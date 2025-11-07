// src\components\EmojiItem.jsx
import { useState } from "react";

export default function EmojiItem({ symbol, title, onCopy, label }) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(symbol);
      setCopied(true);
      onCopy?.(symbol);
      setTimeout(() => setCopied(false), 900);
    } catch {
      // fallback
      onCopy?.(symbol);
    }
  }

  return (
    <button className="emoji-item" onClick={handleClick} title="Click to copy">
      <span className="emoji">{symbol}</span>
      <span className="title">{label ?? title}</span>
      {copied && <span className="copied">copied</span>}
    </button>
  );
}
