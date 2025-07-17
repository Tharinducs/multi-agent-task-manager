import rateLimit from "express-rate-limit";

export const globalRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    code: "SYS_RATE_LIMIT",
    message: "Too many requests, please try again later.",
  },
});