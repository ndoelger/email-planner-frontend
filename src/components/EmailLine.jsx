import React from "react";

function EmailLine({ email, audience, subject, preview, deployment, sent }) {
  const date = new Date(deployment);

  const dateStr =
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    date.getDate().toString().padStart(2, "0") +
    "/" +
    date.getFullYear().toString().slice(-2);

  // Determine AM or PM
  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  // Convert 24-hour time to 12-hour format
  const hours = date.getHours() % 12 || 12; // Converts "0" hours to "12"

  // Format the time as HH:MM AM/PM
  const timeStr =
    hours.toString().padStart(2, "0") +
    ":" +
    date.getMinutes().toString().padStart(2, "0") +
    " " +
    ampm;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" defaultChecked={sent} />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{email}</div>
            <div className="text-sm opacity-50">{audience}</div>
          </div>
        </div>
      </td>
      <td>
        {subject}
        <br />
        <span className="badge badge-ghost badge-sm">{preview}</span>
      </td>
      <td>{dateStr}</td>
      <th>
        <button className="btn btn-ghost btn-xs">{timeStr}</button>
      </th>
      <th>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
        </svg>
      </th>
    </tr>
  );
}

export default EmailLine;

// <div>
//   <table>
//     <thead>
//       <tr>
//         <th className="text-left"></th>
//         <th className="text-left">Email</th>
//         <th className="text-align: left">Subject</th>
//         <th>Preview</th>
//         <th>Audience</th>
//         <th>Date</th>
//         <th>Time</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <th>1</th>
//         <td>Bleecker St Block Party Invite</td>
//         <td>Open for Black Friday Deals ✉️: Up to 60% Off in NYC!</td>
//         <td>Save big on best-selling brands like SET Active, weworewhat, and more.</td>
//         <td>NYC</td>
//         <td>11/20/2024</td>
//         <td>1:00 PM</td>
//       </tr>
//     </tbody>
//   </table>
// </div>
