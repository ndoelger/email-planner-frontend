import React from "react";

function EmailLine({subject, preview, deployment, sent}) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
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
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox"/>
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
                  <div className="font-bold">Bleecker St Block Party</div>
                  <div className="text-sm opacity-50">NYC Downtown</div>
                </div>
              </div>
            </td>
            <td>
              Open for Black Friday Deals ✉️: Up to 60% Off in NYC!
              <br />
              <span className="badge badge-ghost badge-sm">
                Save big on best-selling brands like SET Active, weworewhat, and
                more.{" "}
              </span>
            </td>
            <td>3/27/24</td>
            <th>
              <button className="btn btn-ghost btn-xs">5:00 PM</button>
            </th>
          </tr>
        </tbody>
        {/* foot */}
        {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
      </table>
    </div>
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
