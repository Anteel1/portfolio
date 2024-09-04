import { API_MESSAGE, API_STATUS } from "@/constant";
import { customResponse } from "@/ultis";
import { NextResponse , NextRequest } from "next/server";

// To handle a GET request to /api
export async function GET(request : NextRequest) {
  const querySymbol = request.nextUrl.searchParams.get('symbol')
  const getStockBySymbol = await fetch(`https://iboard-query.ssi.com.vn/le-table?stockSymbol=${querySymbol}&pageSize=50`,{
    method:'GET'
  })
  const result = await getStockBySymbol.json()
  const response : ApiResponse<any> = {
    message : API_MESSAGE.SUCCESS,
    status : API_STATUS.SUCCESS,
    data: result.data
  }
  return customResponse(response);
}