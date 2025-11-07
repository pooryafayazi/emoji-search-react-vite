// src\components\EmojiList.jsx
import EmojiItem from "./EmojiItem.jsx";
import { highlight } from "../lib/filter.jsx";

export default function EmojiList({ items, term }) {
  if (!items?.length) return <p>No results</p>;
  return (
    <div className="emoji-list">
      {items.map(e => (
        <EmojiItem
          key={e.title}
          symbol={e.symbol}
         // title={e.title}
        //  label={highlight(e.title, term)}
          onCopy={() => {}}
        />
      ))}
    </div>
  );
}
