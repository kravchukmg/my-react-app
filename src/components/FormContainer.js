import React, { Component } from "react";
import FormComponent from "./FormComponent";
import "./FormContainer.css";

export default class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "Male",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      },
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    type !== "checkbox"
      ? type === "number"
        ? this.setState({ [name]: Number(value) })
        : this.setState({ [name]: value })
      : this.setState((prevState) => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked,
            },
          };
        });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = JSON.stringify(this.state);
    console.log(formData);

    this.setState({
      firstName: "",
      lastName: "",
      age: "",
      gender: "Male",
      destination: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false,
      },
    });
  };

  render() {
    return (
      <main>
        <FormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          {...this.state}
        />
        <hr />

        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName + " " + this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p className="dietary">
          Your dietary restrictions:
          <span
            className={`dietary ${
              !this.state.dietaryRestrictions.isKosher ? "hidden" : ""
            }`}
          >
            {this.state.dietaryRestrictions.isVegan && "- vegan;"}
          </span>
          <span
            className={`dietary ${
              !this.state.dietaryRestrictions.isKosher ? "hidden" : ""
            }`}
          >
            {this.state.dietaryRestrictions.isKosher && "- kosher;"}
          </span>
          <span
            className={`dietary ${
              !this.state.dietaryRestrictions.isLactoseFree ? "hidden" : ""
            }`}
          >
            {this.state.dietaryRestrictions.isLactoseFree && "- lactose free;"}
          </span>
        </p>
      </main>
    );
  }
}
