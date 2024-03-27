import React, { useState } from "react";
import { addEmail } from "../utilities/emails-api";

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

  async function handleSubmit(evt) {
    evt.preventDefault();
    await addEmail(email);
    setEmail({
      subject: "",
      preview: "",
      date: "",
      time: "",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Subject:
          <input type="text" value={email.subject} name="subject" onChange={handleChange} required />
        </label>
        <label>
          Preview:
          <input type="text" name="preview" value={email.preview} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={email.date} onChange={handleChange} />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={email.time} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Add;
