"use client";

import React from "react";
import styles from "./discount.module.css";

type Item = {
    id: number;
    name: string;
    price: number;
    discount: number;
};

const DiscountSideBar = () => {
    const [items, setItems] = React.useState<Item[]>([
        { id: 1, name: "Product A", price: 100, discount: 0 },
        { id: 2, name: "Product B", price: 200, discount: 0 },
        { id: 3, name: "Product C", price: 150, discount: 0 },
        { id: 4, name: "Product D", price: 300, discount: 0 },
    ]);

    const [editingItemId, setEditingItemId] = React.useState<number | null>(null);
    const [discountValue, setDiscountValue] = React.useState<string>("");

    const handleAddDiscount = (item: Item, currentDiscount: number) => {
        setEditingItemId(item.id);
        setDiscountValue(currentDiscount > 0 ? currentDiscount.toString() : "");
    };

    const handleSaveDiscount = (itemId: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId
                    ? { ...item, discount: parseFloat(discountValue) || 0 }
                    : item
            )
        );
        setEditingItemId(null);
        setDiscountValue("");
    };

    const handleCancelDiscount = () => {
        setEditingItemId(null);
        setDiscountValue("");
    };

    return (
        <aside className={styles.container}>
            <h2 className={styles.title}>Discounts</h2>
            <div className={styles.productList}>
                {items.map((item) => (
                    <div key={item.id} className={styles.productCard}>
                        <div className={styles.headerRow}>
                            <p className={styles.productName}>{item.name}</p>
                            <p className={styles.productPrice}>${item.price}</p>
                        </div>
                        {item.discount > 0 && editingItemId !== item.id && (
                            <div>
                                <span className={styles.discountBadge}>
                                    Discount: ${item.discount}
                                </span>
                            </div>
                        )}

                        <div className={styles.actionRow}>
                            {editingItemId === item.id ? (
                                <div className={styles.inputGroup}>
                                    <input
                                        type="number"
                                        className={styles.input}
                                        value={discountValue}
                                        onChange={(e) => setDiscountValue(e.target.value)}
                                        placeholder="Amount"
                                    />
                                    <button
                                        className={`${styles.btn} ${styles.btnPrimary}`}
                                        onClick={() => handleSaveDiscount(item.id)}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className={`${styles.btn} ${styles.btnSecondary}`}
                                        onClick={handleCancelDiscount}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <button
                                    type="button"
                                    className={`${styles.btn} ${styles.btnOutline}`}
                                    onClick={() => handleAddDiscount(item, item.discount)}
                                >
                                    {item.discount > 0 ? "Edit Discount" : "Add Discount"}
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default DiscountSideBar;