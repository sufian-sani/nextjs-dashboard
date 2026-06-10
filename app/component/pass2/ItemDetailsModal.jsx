import { useState } from "react";

function ItemDetailsModal({
  isOpen,
  itemName,
  onClose,
  onApply,
}) {
  const [customPrice, setCustomPrice] = useState("");
  const [instruction, setInstruction] = useState("");

  if (!isOpen) return null;

  const handleApply = () => {
    onApply({
      customPricing: customPrice,
      itemInstruction: instruction,
    });
  };

  return (
    <div>
      <h2>{itemName}</h2>

      <input
        type="text"
        placeholder="Custom Price"
        value={customPrice}
        onChange={(e) => setCustomPrice(e.target.value)}
      />

      <textarea
        placeholder="Instruction"
        value={instruction}
        onChange={(e) => setInstruction(e.target.value)}
      />

      <button onClick={handleApply}>
        Apply
      </button>

      <button onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default ItemDetailsModal;