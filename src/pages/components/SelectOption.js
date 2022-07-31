import React, { useEffect, useState } from "react";
import Creatable from "react-select/creatable";

export default function SelectOption() {
  const [selectedOptions, setSelectedOptions] = useState();
  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" },
    { value: "whdfite", label: "Whdfite" },
    { value: "whdfite", label: "Wfddfdhite" },
    { value: "whdfite", label: "Whfdite" },
    { value: "whfite", label: "Whifddte" },
    { value: "whwite", label: "Whidfte" },
    { value: "whgite", label: "Whdfdite" },
  ];
  const [option, setOption] = useState([]);
  // const [optionList, setOptionList] = useState([]);

  // useEffect(()=>{
  //   fetch('https://udoy.scholaruni.com/api/tags/')
  //   .then(res=>res.json())
  //   .then(res=> setOption(res))
  //   console.log(option)

  //   if (option.length > 0){
  //     let arr = [];
  //     option.map((e)=>arr.push({value:e.name, label:e.name}))
  //     setOptionList(arr)
  //   }
  // },[])

  


  
  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data) ;
    // setSelectedOptions({...selectedOptions, data}) ;
    console.log(selectedOptions)
  }
  return (
    <div className="app">
      <h2>Choose your color</h2>
      <div className="dropdown-container">
        <Creatable
          // allowCreateWhileLoading={true}
          maxMenuHeight={200}
          options={optionList}
          placeholder="Select color"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        /> 
      </div>
    </div>
  );
}

