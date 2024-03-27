import sendRequest from "./send-request";
//const BASE_URL = '/api/items'
const BASE_URL = "http://localhost:3001/emails";

export async function getEmails() {
  const emails = await sendRequest(BASE_URL);
  return emails;
}

export async function addEmail(formData) {
  const emails = await sendRequest(BASE_URL, "POST", formData);
  return emails;
}

// export async function addEmail(id) {
//   const emails = await sendRequest(BASE_URL, "DELETE", id);
//   return emails;
// }
