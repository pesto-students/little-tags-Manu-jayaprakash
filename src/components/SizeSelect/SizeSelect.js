import React, { useState } from "react";
import "./SizeSelect.css";

export default function SizeSelect({size}) {
  const [sizeValue, setSize] = useState(size);
  const handleChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <select className="size-selector" value={sizeValue} onChange={handleChange}>
      <option value="s">S</option>
      <option value="m">M</option>
      <option value="l">L</option>
      <option value="xl">XL</option>
      <option value="xxl">XXL</option>
    </select>
  );
}
