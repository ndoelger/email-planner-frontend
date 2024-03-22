import React, { useState } from "react";

function Add() {
  const [email, setEmail] = useState({
    subject: "",
    preview: "",
    date: "",
    time: "",
  });

  const handleChange = (evt) => {
    const emailData = { ...email, [evt.target.name]: evt.target.value };
    setEmail(emailData);
  };

  return (
    <div>
      <form>
        <label>
          Subject:
          <input type="text" name="subject" onChange={handleChange} required />
        </label>
        <label>
          Preview:
          <input type="text" name="preview" onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Add;
