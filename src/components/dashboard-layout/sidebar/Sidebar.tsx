'use client'

import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/color.constants'

import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

import s from './Sidebar.module.scss'

export function Sidebar() {
	return (
		<aside className={s.aside}>
			<div>
				<Link
					href='/'
					className={s.logo}
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
					/>
					<span className={s.header}>
						Deetle
						<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
							beta
						</span>
					</span>
				</Link>
				<div className='p-3 relative'>
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
			<footer className={s.footer}>
				2024 &copy; With love from{' '}
				<a
					href=''
					className='hover:text-primary text-brand-300 transition-colors'
				>
					Deetle
				</a>
				. <br /> All rights reserved.
			</footer>
		</aside>
	)
}
