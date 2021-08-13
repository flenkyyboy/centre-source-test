import React, { useState } from "react";
import {
    Card
} from "react-bootstrap";
import Switch from 'react-switch'

const FoodCard = ({ food }) => {
  const [checked, setChecked] = React.useState(false)
  const [selectedOption, setSelectedOption] = useState(food.option_a)

  React.useEffect(() => {
    setSelectedOption(food.option_a)
  }, [food])

  return (
    <div className="center-column">
      <h5 className="card-text-time">{food.serve_time}</h5>
      <Card className="card-food">
        <Card.Img variant="top" style={{ height: '100%'}} src={selectedOption.image} />
        <Card.ImgOverlay>
          <div className="card-btn-container">
             <Switch  width={120} height={60} borderRadius={10}
              checkedIcon={<h1 className="checked-icon-text">A</h1>}
              checkedHandleIcon={<h1 className="unchecked-icon-text">B</h1>}
              uncheckedIcon={<h1 className="checked-icon-text">B</h1>}
              uncheckedHandleIcon={<h1 className="unchecked-icon-text">A</h1>}
              checked={checked}
              onChange={(value) => {
                setChecked(value)
                setSelectedOption(value ? food.option_b : food.option_a)
              }}
             />
          </div>
        </Card.ImgOverlay>
      </Card>
      <h5 className="card-text-name">{selectedOption.name}</h5>
    </div>
  );
};
export default FoodCard;
