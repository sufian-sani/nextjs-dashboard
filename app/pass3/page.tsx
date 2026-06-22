"use client";

import { useState } from "react";

function Main() {
    const [splitBase, setSplitBase] = useState(0);
    const [enterSplitAmount, setEnterSplitAmount] = useState(0);

    const remainingAfterPayment = Math.max(0, splitBase - enterSplitAmount);


  return (
    <>
        <h1>Pass 3</h1>
        <p>This is the Pass 3 page.</p>
        {/* amount calculation logic here */}

        <p>Remaining after payment: {remainingAfterPayment}</p>

        <form action="">
            <label htmlFor="splitBase">Split Base:</label>
            <input
                type="number"
                id="splitBase"
                value={splitBase}
                onChange={(e) => setSplitBase(Number(e.target.value))}
            />

            <label htmlFor="enterSplitAmount">Enter Split Amount:</label>
            <input
                type="number"
                id="enterSplitAmount"
                value={enterSplitAmount}
                onChange={(e) => setEnterSplitAmount(Number(e.target.value))}
            />
        </form>

    </>
  );
}

export default Main;