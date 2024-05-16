import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log('포켓몬 숫자 ', params.id)
  return NextResponse.json({
    name: '포켓몬 숫자' + params.id,
  })
}
