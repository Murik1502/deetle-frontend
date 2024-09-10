import { DropResult } from '@hello-pangea/dnd'
import type { Dispatch, SetStateAction } from 'react'

import type { ITaskResponse } from '@/types/task.types'

import { FILTERS } from '../columns.data'

import { useUpdateTask } from './useUpdateTask'

interface ITaskDnd {
  setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function useTaskDnd({ setItems }: ITaskDnd) {
  const { updateTask } = useUpdateTask()

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const destinationColumnId = result.destination.droppableId

    if (destinationColumnId === result.source.droppableId) return

    if (destinationColumnId === 'completed') {
      setItems(prevItems =>
        prevItems!.map(item =>
          item.id === result.draggableId ? { ...item, isCompleted: true } : item
        )
      )

      updateTask({
        id: result.draggableId,
        data: { isCompleted: true }
      })

      return
    }

    const newCreatedAt = FILTERS[destinationColumnId].format()

    setItems(prevItems =>
      prevItems!.map(item =>
        item.id === result.draggableId
          ? { ...item, createdAt: newCreatedAt, isCompleted: false }
          : item
      )
    )

    updateTask({
      id: result.draggableId,
      data: {
        createdAt: newCreatedAt,
        isCompleted: false
      }
    })
  }

  return { onDragEnd }
}
