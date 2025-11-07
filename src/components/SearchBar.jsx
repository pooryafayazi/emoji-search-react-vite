// src\components\SearchBar.jsx
export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search emojis…"
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label="Search emojis"
      />
    </div>
  );
}
