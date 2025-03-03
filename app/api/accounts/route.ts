import { NextResponse } from "next/server";

import Account from "@/database/account.model";
import handleError from "@/lib/handlers/error";
import { ForbiddenError } from "@/lib/https-errors";
import dbConnect from "@/lib/mongoose";
import { AccountSchema } from "@/lib/validations";
import { APIErrorResponse } from "@/types/global";

// GET /api/accounts
export async function GET() {
  try {
    await dbConnect();

    const accounts = await Account.find();

    return NextResponse.json(
      { success: true, data: accounts },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}

// Create Account, POST /api/accounts
export async function POST(request: Request) {
  try {
    const body = await request.json();
    await dbConnect();

    const validatedData = AccountSchema.parse(body);

    const existingUser = await Account.findOne({
      provider: validatedData.provider,
      providerAccountId: validatedData.providerAccountId,
    });

    if (existingUser)
      throw new ForbiddenError(
        "An account with the same provider already exists."
      );

    const newAccount = await Account.create(validatedData);

    return NextResponse.json(
      { success: true, data: newAccount },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
