import sendRequest from "./send-request";
//const BASE_URL = '/api/items'
const BASE_URL = "http://localhost:3001/emails";

export async function getEmails() {
  const emails = await sendRequest(BASE_URL);
  return emails;
}

// export async function addEmail() {
//   const emails = await sendRequest(`{BASE_URL}/new`, "POST", formData);
//   return emails;
// }

