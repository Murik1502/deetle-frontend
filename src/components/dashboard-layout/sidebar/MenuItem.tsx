import Link from 'next/link'

import { IMenuItem } from './menu.interface'

import s from './Sidebar.module.scss'

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div className='mt-4'>
			<Link
				href={item.link}
				className='flex gap-2.5 items-center py-1.5 mt-2 justify-center transition-colors hover:bg-border rounded-lg'
			>
				<item.icon />
				<span className={s.menuItem}>{item.name}</span>
			</Link>
		</div>
	)
}
