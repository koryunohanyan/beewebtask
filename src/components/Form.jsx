import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
export default function Form({ title, handleClick }) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => handleClick(data.email, data.password);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="loginput"
          placeholder="email"
          defaultValue=""
          {...register("email", { required: true })}
        />
        {errors.email && (
          <div style={{ color: "red", marginBottom: "10px" }}>
            ⚠ This field is required
          </div>
        )}
        <input
          type="password"
          className="loginput"
          placeholder="password"
          {...register("password", { required: true })}
        />

        {errors.password && (
          <div style={{ color: "red" }}>⚠ This field is required</div>
        )}

        <button type="submit" className="subinput">
          {title}
        </button>
      </form>
    </div>
  );
}
