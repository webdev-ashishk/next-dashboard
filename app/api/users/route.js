import { NextResponse } from "next/server";
import { user } from "../../../utils/user";

export async function GET(request) {
  return NextResponse.json(user);
}
