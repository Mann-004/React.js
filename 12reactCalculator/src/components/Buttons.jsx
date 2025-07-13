import React, { useEffect, useState } from "react";

const Buttons = () => {
    const [value, setValue] = useState("");

    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+"
    ];

    const handleClear = () => {
        setValue("");
    };

    const handleCalculation = () => {
        try {
            const result = eval(value);
            setValue(result.toString());
        } catch (err) {
            console.error("Invalid expression:", err.message);
            setValue("Error");
        }
    };


    const deleteValue = () => {
        setValue((prev) => prev.slice(0, -1));
    };

    const inputValue = (btn) => {
        if (value === "Error" && btn !== "C" && btn !== "Escape") return;

        if (btn === "Enter" || btn === "=") {
            handleCalculation();
        } else if (btn === "Backspace") {
            deleteValue();
        } else if (btn === "Escape") {
            handleClear();
        } else if (/^[0-9+\-*/.]$/.test(btn)) {
            setValue((prev) => prev + btn);
        }
    };


    useEffect(() => {
        const handleKeyDown = (e) => {

            inputValue(e.key);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <input
                type="text"
                value={value}
                className="w-full h-12 mb-4 px-4 text-right text-2xl border border-gray-300 rounded-lg"
                readOnly
            />

            <div className="grid grid-cols-4 gap-3 mb-3">
                <button
                    className="col-span-2 bg-red-500 text-white py-3 rounded-lg font-semibold text-lg"
                    onClick={handleClear}
                >
                    C
                </button>
                <button
                    className="col-span-2 bg-yellow-500 text-white py-3 rounded-lg font-semibold text-lg"
                    onClick={deleteValue}
                >
                    DEL
                </button>

                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        onClick={() => inputValue(btn)}
                        className={`text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 transition ${["=", "+", "-", ".", "/", "*"].includes(btn)
                            ? "bg-blue-500"
                            : "bg-gray-800"
                            }`}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </>
    );
};

export default Buttons;
