import { PropsWithChildren } from 'react'

import DashboardLayout from '@/components/dashboard-layout/DashboardLayout'

export default function Layout({
  children
}: {
  children: PropsWithChildren<any>
}) {
  return <DashboardLayout>{children}</DashboardLayout>
}
