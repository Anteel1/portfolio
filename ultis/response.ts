import { NextResponse } from 'next/server';

export const customResponse =(response : ApiResponse<any>) => {
  return NextResponse.json(response);
}