import React, { useState } from "react";
import Checkbox from "react-custom-checkbox";
import {
    Button
} from 'react-bootstrap'
import * as Icon from "react-icons/fi";

const SelectDate = ({ items, foodListChange, item }) => {
    const [currentDate, setCurrentDate] = useState("")
  return (
    <div className="select-date-content">
        { items.map((item, index) => (
            <div className={`select-date-item ${currentDate === item.date && "select-date-item-selected"}`} key={index}>
            <Checkbox
              icon={<Icon.FiCheck color="#669900" size={14} />}
              borderColor="#669900"
              disabled
            />
            <h4 onClick={() => {
                setCurrentDate(item.date)
                foodListChange(item.foods)
            }}>{item.date}</h4>
          </div>
        ))}
      
      
      <div className="select-custom-date">
          <Button>Select Custom Dates</Button>
      </div>
    </div>
  );
};

export default SelectDate;
