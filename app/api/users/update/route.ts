import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

//? Handle the GET TO FETCH THE USERS
export async function PUT(req: NextRequest) {
    const url = new URL(req.url);
    let { searchParams } = url;
    let email = searchParams.get("email");
    let name = searchParams.get("name");


  await connectToDatabase();

  if (!email || !name) {
    return NextResponse.json(
      { success: false, err: "Email & Name are required" },
      { status: 400 }
    );
  }
  let find = { email };
  let update = { name: name };
  const user = await User.findOneAndUpdate(find, update, { new: true });

  return NextResponse.json({ success: true, data: user }, { status: 200 });
}
