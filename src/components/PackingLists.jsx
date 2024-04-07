import React, { useState } from 'react'

export const PackingLists = ({ items, setItems }) => {

  const [sortBy,setSortBy] = useState('input')

  let sortedItems;

  if(sortBy === 'input') sortedItems = items;
  if(sortBy === 'description') sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description))
  if(sortBy==='packed') sortedItems = items.slice().sort((a,b) => Number(a.packed)-Number(b.packed))

  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handlePackedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="list">
      {items.length > 0 ? (
        <ul>
          {sortedItems.map((item) => {
            return (
              <li key={item.id}>
                <input
                  type="checkbox"
                  value={item.packed}
                  onChange={() => handlePackedItem(item.id)}
                />
                <p>{item.quantity}</p>
                <p>{item.description}</p>
                <button onClick={() => deleteItem(item.id)}>❌</button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Add items...</p>
      )}

      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          onClick={() => {
            const confirmed= window.confirm("Are you sure you want to delete all items?");
            if(confirmed) setItems([]);
          }}
        >
          clear list
        </button>
      </div>
    </div>
  );
}
