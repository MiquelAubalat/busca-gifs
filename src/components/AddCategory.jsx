import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const inInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    const textoInput = inputValue.trim();
    e.preventDefault();
    if (textoInput.length <= 1) return;
    setInputValue("");
    onNewCategory(textoInput);
  };

  return (
    <form onSubmit={onSubmit}>
    <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={inInputChange}
      />
    </form>
  );
};





