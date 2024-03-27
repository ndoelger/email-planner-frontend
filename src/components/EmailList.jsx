import React, { useEffect, useState } from "react";
import { getEmails } from "../utilities/emails-api";
import EmailLine from "./EmailLine";

function EmailList() {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const emails = await getEmails();
    setEmails(emails);
  };

  // const deleteEmail = async () => {
  //   await deleteItem(id);
  // }

  console.log(emails);

  useEffect(() => {
    fetchEmails();
  }, [emails]);



  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Email</th>
            <th>SL/PV</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => {
            return (
              <EmailLine
                key={email.id}
                email={"TK"}
                audience={"TK"}
                subject={email.subject}
                preview={email.preview}
                deployment={email.deployment}
                sent={false}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmailList;
