"use client";

import { useState } from "react";
import ItemDetailsModal from "@/app/component/pass2/ItemDetailsModal";

type ApplyData = {
  customPricing: string;
  itemInstruction: string;
};

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    name: "Burger",
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeItemDetails = () => {
    setIsOpen(false);
  };

  const handleCustomPrice = (itemId: number, price: string) => {
    console.log("Item ID:", itemId);
    console.log("Custom Price:", price);
  };

  const handleInstruction = (itemId: number, instruction: string) => {
    console.log("Item ID:", itemId);
    console.log("Instruction:", instruction);
  };

  return (
    <>
      <button onClick={openModal}>
        Open Modal
      </button>

      <ItemDetailsModal
        isOpen={isOpen}
        itemName={selectedItem.name}
        onClose={closeItemDetails}
        onApply={(data: ApplyData) => {
          handleCustomPrice(
            selectedItem.id,
            data.customPricing
          );

          handleInstruction(
            selectedItem.id,
            data.itemInstruction
          );

          closeItemDetails();
        }}
      />
    </>
  );
}

export default Menu;