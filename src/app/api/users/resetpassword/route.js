import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModels";
import { NextResponse } from "next/server";
import { sendEmail } from "../../../../helpers/mail";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email } = reqBody;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "Email not found" }, { status: 400 });
    }

    if (user) {
      await sendEmail({
        email: user.email,
        emailType: "RESET",
        userId: user._id,
      });
    }

    return NextResponse.json({
      message: "Password reset link sent to email",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
