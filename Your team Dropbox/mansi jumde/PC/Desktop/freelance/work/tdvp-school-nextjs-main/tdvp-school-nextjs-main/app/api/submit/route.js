import { google } from "googleapis";
import { NextResponse } from "next/server";

// export async function GET(req){
//   return NextResponse.json({ data: "Hi" }, { status: 200 });
// }

export async function POST(req) {
  const body = await req.json();

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "EnquiryData!A1:G1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.fullName,
            body.email,
            body.dob,
            body.mobile,
            body.admissionClass,
            body.gender,
            body.address,
          ],
        ],
      },
    });
    return NextResponse.json({ data: response.data }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: "something wrong" }, { status: 500 });
  }
}
