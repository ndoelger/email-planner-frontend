import React, { useEffect, useState } from "react";
import { getEmails } from "../utilities/emails-api";

function EmailList() {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    console.log("ya");
    const emails = await getEmails();
    setEmails(emails);
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div>
      <h1>Emails</h1>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email.subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default EmailList;
