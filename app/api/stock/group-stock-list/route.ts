import { API_MESSAGE, API_STATUS } from "@/constant";
import { customResponse } from "@/ultis";
import { NextResponse , NextRequest } from "next/server";

// To handle a GET request to /api
export async function GET(request : NextRequest) {
  const queryGroup = request.nextUrl.searchParams.get('group') || 'VN30'
    const getGroupStock = await fetch(`https://iboard-query.ssi.com.vn/v2/stock/group/${queryGroup}`,{
      method:'GET'
    })
    const result = await getGroupStock.json()
    const response : ApiResponse<any> = {
      message : API_MESSAGE.SUCCESS,
      status : API_STATUS.SUCCESS,
      data: result.data
    }
    return customResponse(response);
}