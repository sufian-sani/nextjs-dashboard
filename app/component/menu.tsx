export default function Menu({ items, selectedId, onPick }) {
    // console.log('---------items',items);
    // console.log('---------selectedId',selectedId);
    console.log('---------onPick',onPick);
    
  return (
    <div>
      {items.map((it) => (
        <button
          key={it.id}
          onClick={() => onPick(it.id)}   // ✅ pass JSON value
          style={{ fontWeight: it.id === selectedId ? "bold" : "normal" }}
        >
          {it.name}/
        </button>
      ))}
    </div>
  );
}