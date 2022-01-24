import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  
  /*useEffect(() => {
    document.body.addEventListener("click", (event) => {       
        if (ref.current.contains(event.target)) {
          return;
        }
        setOpen(false);
      },
      { capture: true }      
    );

  }, []);*/

  useEffect(() => {
    const onBodyClick = (event) => {       
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);     
    }

    document.body.addEventListener("click", onBodyClick, {capture: true});

    return () => {
      document.body.removeEventListener("click", onBodyClick, {capture: true});
    };
  }, []);

  const renderedOptions = options.map((option) => {
    // to hide the selected value in the dropdown
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown active">
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </i>
        </div>

       
      </div>
    </div>
  );
};

export default Dropdown;


/*
 <div className="text">
          <h1 style={{color: selected.value}}>The Text is {selected.value.toUpperCase()}</h1>
        </div>
      */