import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import SelectDate from "../components/SelectDate";
import { Container, Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import FoodCard from "../components/FoodCard";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const data = [
    {
        id: 1,
        date: "02/01/2021",
        foods: [
            {
                serve_time: "Breakfast",
                option_a: {
                    name: "Asian Beef Salad",
                    image: "https://assets.bonappetit.com/photos/5f0c791fabafbe421929a9cb/5:7/w_800,h_1120,c_limit/Thai-Beef-Salad-Recipe.jpg"
                },
                option_b: {
                    name: "Beef Salad Mozzarela",
                    image: "https://addapinch.com/wp-content/uploads/2018/06/balsamic-steak-salad-reicpe_DSC0127-Recovered-700x1043.jpg"
                },
            },
            {
                serve_time: "Lunch",
                option_a: {
                    name: "Asian Beef Salad",
                    image: "https://assets.bonappetit.com/photos/5f0c791fabafbe421929a9cb/5:7/w_800,h_1120,c_limit/Thai-Beef-Salad-Recipe.jpg"
                },
                option_b: {
                    name: "Beef Salad Mozzarela",
                    image: "https://addapinch.com/wp-content/uploads/2018/06/balsamic-steak-salad-reicpe_DSC0127-Recovered-700x1043.jpg"
                },
            },
            {
                serve_time: "Evening Meal",
                option_a: {
                    name: "Asian Beef Salad",
                    image: "https://assets.bonappetit.com/photos/5f0c791fabafbe421929a9cb/5:7/w_800,h_1120,c_limit/Thai-Beef-Salad-Recipe.jpg"
                },
                option_b: {
                    name: "Beef Salad Mozzarela",
                    image: "https://addapinch.com/wp-content/uploads/2018/06/balsamic-steak-salad-reicpe_DSC0127-Recovered-700x1043.jpg"
                },
            },
            {
                serve_time: "Supper",
                option_a: {
                    name: "Asian Beef Salad",
                    image: "https://assets.bonappetit.com/photos/5f0c791fabafbe421929a9cb/5:7/w_800,h_1120,c_limit/Thai-Beef-Salad-Recipe.jpg"
                },
                option_b: {
                    name: "Beef Salad Mozzarela",
                    image: "https://addapinch.com/wp-content/uploads/2018/06/balsamic-steak-salad-reicpe_DSC0127-Recovered-700x1043.jpg"
                },
            }
        ]
    },
    {
        id: 2,
        date: "03/02/2021",
        foods: [
            {
                serve_time: "Breakfast",
                option_b: {
                    name: "Asian Beef Salad",
                    image: "https://assets.bonappetit.com/photos/5f0c791fabafbe421929a9cb/5:7/w_800,h_1120,c_limit/Thai-Beef-Salad-Recipe.jpg"
                },
                option_a: {
                    name: "Beef Salad Mozzarela",
                    image: "https://addapinch.com/wp-content/uploads/2018/06/balsamic-steak-salad-reicpe_DSC0127-Recovered-700x1043.jpg"
                },
            },
            {
                serve_time: "Lunch",
                option_a: {
                    name: "Asian Beef Salad",
                    image: "https://assets.bonappetit.com/photos/5f0c791fabafbe421929a9cb/5:7/w_800,h_1120,c_limit/Thai-Beef-Salad-Recipe.jpg"
                },
                option_b: {
                    name: "Beef Salad Mozzarela",
                    image: "https://addapinch.com/wp-content/uploads/2018/06/balsamic-steak-salad-reicpe_DSC0127-Recovered-700x1043.jpg"
                },
            },
            {
                serve_time: "Evening Meal",
                option_b: {
                    name: "Asian Beef Salad",
                    image: "https://assets.bonappetit.com/photos/5f0c791fabafbe421929a9cb/5:7/w_800,h_1120,c_limit/Thai-Beef-Salad-Recipe.jpg"
                },
                option_a: {
                    name: "Beef Salad Mozzarela",
                    image: "https://addapinch.com/wp-content/uploads/2018/06/balsamic-steak-salad-reicpe_DSC0127-Recovered-700x1043.jpg"
                },
            },
            {
                serve_time: "Supper",
                option_a: {
                    name: "Asian Beef Salad",
                    image: "https://assets.bonappetit.com/photos/5f0c791fabafbe421929a9cb/5:7/w_800,h_1120,c_limit/Thai-Beef-Salad-Recipe.jpg"
                },
                option_b: {
                    name: "Beef Salad Mozzarela",
                    image: "https://addapinch.com/wp-content/uploads/2018/06/balsamic-steak-salad-reicpe_DSC0127-Recovered-700x1043.jpg"
                },
            }
        ]
    }
]

const Home = () => {
    const [items] = useState(data);
    const [selectedFoods, setSelectedFoods] = useState(items[0].foods)

    const foodListChange = (foods) => {
        setSelectedFoods(foods)
    }
    
  return (
    <div>
      <NavigationBar />
      <Container>
        <div
          className="center-column"
        >
          <h1 className="home-title">Choose Your Dishes</h1>
          <Image src="http://www.clker.com/cliparts/0/i/g/m/a/5/color-divider-yellow.svg" style={{ width: '50%', height: 100}} />
        </div>

        <div
        className="center-column"
        >
          <h3 className="home-subtitle">
            As per your recommended calorie, choose your dishes from below
          </h3>
        </div>

        <div>
          <div className="default-menu">Choose Default Menu</div>
        </div>

        {/* foods section */}

        <div style={{ marginTop: "120px" }} />
        <div style={{ display: "flex", overflow: "hidden" }}>
          <Row>
            <Col md={2}>
              <SelectDate items={items} foodListChange={foodListChange} />
            </Col>

            <Col md={10}>
              { selectedFoods.length && (
                  <ListGroup horizontal>
                  { selectedFoods.map((item, index) => (
                      <ListGroup.Item style={{ border: "none" }} key={index}>
                      <FoodCard food={item} />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Button className="proceed-btn">Proceed</Button>
        </div>
      </Container>
      <Contact />
      <Footer />
      <div>
        <hr />
        <h5 className="text-center copyright-text">Copyright 2020-2021 Edibles - All Rights Reserved</h5>
      </div>
    </div>
  );
};

export default Home;
