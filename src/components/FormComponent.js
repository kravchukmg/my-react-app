import React from "react";
import "./FormComponent.css";

export default function FormComponent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={props.firstName}
        onChange={props.handleChange}
        placeholder="First Name"
      />
      <br />
      <input
        type="text"
        name="lastName"
        value={props.lastName}
        onChange={props.handleChange}
        placeholder="Last Name"
      />
      <br />
      <input
        type="number"
        name="age"
        value={props.age}
        onChange={props.handleChange}
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
            checked={props.gender.toLocaleLowerCase() === "male"}
            onChange={props.handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={props.gender.toLocaleLowerCase() === "female"}
            onChange={props.handleChange}
          />{" "}
          Female
        </label>
      </fieldset>
      <br />

      <select
        name="destination"
        value={props.destination}
        onChange={props.handleChange}
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
            checked={props.dietaryRestrictions.isVegan}
            onChange={props.handleChange}
          />{" "}
          Vegan
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isKosher"
            checked={props.dietaryRestrictions.isKosher}
            onChange={props.handleChange}
          />{" "}
          Kosher
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            checked={props.dietaryRestrictions.isLactoseFree}
            onChange={props.handleChange}
          />{" "}
          Lactose Free
        </label>
      </fieldset>
      <br />

      <button>Submit</button>
    </form>
  );
}
