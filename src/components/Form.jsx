
import React, {useState}from 'react'

export const Form= ({ onAddItems }) => {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function addItem(e) {
      e.preventDefault();
      if (description) {
        const newItem = {
          description,
          quantity,
          packed: false,
          id: Date.now(),
        };
  
        onAddItems(newItem);
  
        setDescription("");
        setQuantity(1);
      }
    }
    return (
      <form className="add-form" onSubmit={addItem}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
          name="quantity"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        >
          {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => {
            return (
              <option value={num} key={num}>
                {num}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          name="description"
          placeholder="items.."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit">add</button>
      </form>
    );
  }
  