import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />

          <fieldset>
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={this.state.gender.toLocaleLowerCase() === "male"}
                onChange={this.handleChange}
              />{" "}
              Male
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={this.state.gender.toLocaleLowerCase() === "female"}
                onChange={this.handleChange}
              />{" "}
              Female
            </label>
          </fieldset>
          <br />

          <select
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option value="" checked disabled>
              Select your destination
            </option>
            <option value="Ukraine">Ukraine</option>
            <option value="Germany">Germany</option>
            <option value="Norway">Norway</option>
            <option value="Canada">Canada</option>
          </select>
          <br />

          <fieldset>
            <legend>Dietary restrictions</legend>
            <label>
              <input
                type="checkbox"
                name="isVegan"
                checked={this.state.dietaryRestrictions.isVegan}
                onChange={this.handleChange}
              />{" "}
              Vegan
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="isKosher"
                checked={this.state.dietaryRestrictions.isKosher}
                onChange={this.handleChange}
              />{" "}
              Kosher
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="isLactoseFree"
                checked={this.state.dietaryRestrictions.isLactoseFree}
                onChange={this.handleChange}
              />{" "}
              Lactose Free
            </label>
          </fieldset>
          <br />

          <button>Submit</button>
        </form>
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
