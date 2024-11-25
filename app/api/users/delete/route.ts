import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";

//? Handle the DELETE 
export async function DELETE(req: NextRequest) {
    const url = new URL(req.url);
    let { searchParams } = url;
    let email = searchParams.get("email");


  await connectToDatabase();

  if (!email) {
    return NextResponse.json(
      { success: false, err: "Email are required" },
      { status: 400 }
    );
  }
  let find = { email };
  const user = await User.findOneAndDelete(find, { new: true });

  return NextResponse.json({ success: true, data: user }, { status: 200 });
}
