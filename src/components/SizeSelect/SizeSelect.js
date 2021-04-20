import React from "react";
import "./SizeSelect.css";

export default function SizeSelect() {
  return (
    <select className="size-selector">
      <option>Select</option>
      <option value="8">8 UK</option>
      <option value="9">9 UK</option>
      <option value="10">10 Uk</option>
      <option value="11">11 Uk</option>
      <option value="12">12 Uk</option>
    </select>
  );
}
