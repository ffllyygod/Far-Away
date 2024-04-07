export const Stats = ({items}) => {
    const packedItem = items.filter((item) => item.packed === true).length
  
    return (
      <footer className="stats">
        {items.length
          ? `💼 You have ${items.length} items on your list, and you already packed ${Math.round(packedItem/items.length*100)}%`
          : "Start adding some items to your packing list 🚀"}
      </footer>
    );
}
