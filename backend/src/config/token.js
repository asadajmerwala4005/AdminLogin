import jwt from "jsonwebtoken";

export const genToken1 = (email) => {
  // jwt.sign is usually synchronous; no need for async/await unless using a callback
  return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "7d" });
};
