// // import bcrypt from "bycrptjs";
// // import { bcrypt } from "bcryptjs";
// import pkg from "bcryptjs";
// const { bcrypt } = pkg;

// const users = [
//   {
//     name: "Admin User",
//     email: "admin@email.com",
//     password: bcrypt.hashSync("123456", 10),
//     isAdmin: true,
//   },
//   {
//     name: "John Doe",
//     email: "john@email.com",
//     password: bcrypt.hashSync("123456", 10),
//     isAdmin: false,
//   },
//   {
//     name: "Jane Doe",
//     email: "jane@email.com",
//     password: bcrypt.hashSync("123456", 10),
//     isAdmin: false,
//   },
// ];

// export default users;

import pkg from "bcryptjs";
const { hashSync } = pkg;

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: hashSync("123456", 10), // Use hashSync directly
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@email.com",
    password: hashSync("123456", 10), // Use hashSync directly
    isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: hashSync("123456", 10), // Use hashSync directly
    isAdmin: false,
  },
];

export default users;
