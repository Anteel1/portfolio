import { API_MESSAGE, API_STATUS } from "@/constant";
import { customResponse } from "@/ultis";
import { NextResponse , NextRequest } from "next/server";

// To handle a GET request to /api
export async function GET(request : NextRequest) {
  try {
    const getVNIndex = await fetch('https://iboard-query.ssi.com.vn/exchange-index/VNINDEX?hasHistory=true',{
      method:'GET'
    })
    const result = await getVNIndex.json()
    console.log(result)
    const response : ApiResponse<StockResponse> = {
      message : API_MESSAGE.SUCCESS,
      status : API_STATUS.SUCCESS,
      data: result.data
    }
    return customResponse(response);
  } catch (error) {
    return customResponse({
      message : API_MESSAGE.ERROR,
      status : API_STATUS.BAD_REQUEST,
      data: {
        message :'Get VNINDEX error'
      }
    });
  }
  
}