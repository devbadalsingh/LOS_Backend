import express from "express";

import { protect, requireSessionToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Otp request page
router.route("/verify-aadhaar-request").get(requireSessionToken, (req, res) => {
    res.render("otpRequest");
});
// Render OTP Input Page
router.route("/verify-aadhaar-input").get(requireSessionToken, (req, res) => {
    res.render("otpInput");
});
// OTP submission success page
router.route("/verify-aadhaar-success").get(requireSessionToken, (req, res) => {
    res.render("otpSuccess");
});


export default router;

