import ky from "ky";

const prefixUrl = `https://jsonplaceholder.typicode.com`;

console.log("prefixUrl=====================", prefixUrl);
export const instance = ky.extend({
  prefixUrl,
  headers: {
    Accept: "application/json",
  },
});
