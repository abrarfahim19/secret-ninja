import React, { useState } from "react";
import Creatable from "react-select/creatable";

export default function SelectOption() {
  const [selectedOptions, setSelectedOptions] = useState();
  const optionList = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Express", label: "Express" },
    { value: "Docker", label: "Docker" },
    { value: "AWS", label: "AWS" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "whwite", label: "Whidfte" },
    { value: "whgite", label: "Whdfdite" },
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
    // setSelectedOptions({...selectedOptions, data}) ;
    console.log(selectedOptions);
  }
  return (
    <div className="app">
      <h2>Choos Task Tags</h2>
      <div className="dropdown-container">
        <Creatable
          // allowCreateWhileLoading={true}
          maxMenuHeight={200}
          options={optionList}
          placeholder="Select Tag"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
  );
}
