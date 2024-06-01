// import React from 'react'

import DashboardTable from './_components/dashboard-table';

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
export default async function DashboardPage() {
  return (
    <div className="w-full">
      <DashboardTable />
    </div>
  );
}
