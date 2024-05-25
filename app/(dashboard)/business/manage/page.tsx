// import React from 'react'

// export default function ManagePage() {
//   return (
//     <div>
//       <div>필터링</div>
//       <div>mainId 배타입 펀딩률 마감기한</div>
//       <div>취소 버튼</div>
//       <div>버닝 버튼</div>
//     </div>
//   )
// }
import { getUserById } from '@/app/actions/server/user'
import ManageTable from './_components/manage-table'

export default async function ManagePage() {
  const user = await getUserById('123')
  console.log(user?.name)
  return (
    <div className="w-full">
      {user?.name}
      <ManageTable />
    </div>
  )
}
