import { DropResult } from '@hello-pangea/dnd'

import { FILTERS } from '../columns.data'

import { useTasks } from './useTasks'
import { useUpdateTask } from './useUpdateTask'

export function useTaskDnd() {
  const { updateTask } = useUpdateTask()
  const { items, setItems } = useTasks()

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
