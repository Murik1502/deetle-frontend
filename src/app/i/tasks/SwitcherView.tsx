'use client'

import clsx from 'clsx'
import { Kanban, ListTodo } from 'lucide-react'

import type { TypeView } from './TasksView'

interface ISwitcherView {
  type: TypeView
  setType: (value: TypeView) => void
}

export function SwitcherView({ type, setType }: ISwitcherView) {
  return (
    <div className='flex items-center gap-4 mb-5'>
      <button
        className={clsx(
          'flex items-center gap-1',
          type === 'kanban' && 'opacity-40'
        )}
        onClick={() => setType('list')}
      >
        <ListTodo />
        List
      </button>
      <button
        className={clsx(
          'flex items-center gap-1',
          type === 'list' && 'opacity-40'
        )}
        onClick={() => setType('kanban')}
      >
        <Kanban />
        Kanban
      </button>
    </div>
  )
}
