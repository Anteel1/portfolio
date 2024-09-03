import { API_MESSAGE, API_STATUS } from "@/constant";
import { customResponse } from "@/ultis";
import { NextResponse , NextRequest } from "next/server";

// To handle a GET request to /api
export async function GET(request : NextRequest) {
  // Do whatever you want
  const response : ApiResponse<BasicResponse> = {
    message : API_MESSAGE.SUCCESS,
    status : API_STATUS.SUCCESS,
    data: {
        message : 'This is api request'
    }
  }
  return customResponse(response);
}

// To handle a POST request to /api
export async function POST(request : NextRequest) {
  // Do whatever you want
  const response : ApiResponse<BasicResponse> = {
    message : API_MESSAGE.SUCCESS,
    status : API_STATUS.SUCCESS,
    data: {
        message : 'This is api request'
    }
  }
  return customResponse(response);
}