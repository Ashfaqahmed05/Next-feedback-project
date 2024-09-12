import { resend } from "@/lib/resend";
import VerificationEmail from "../../Emails/VerificationEmail";
import { ApiResponse } from "../types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {

        await resend.emails.send({
            from: 'you@example.com',
            to: 'email',
            subject: 'Feedback message | Verification code',
            react: VerificationEmail({username, otp: verifyCode}),
        });


        return {
            success: true,
            message: "Send verification email successfully "
        }
    } catch (emailError) {
        console.error("Error Sending Verification email")
        return {
            success: false,
            message: "failed to send verification email"
        }
    }
}