import cn from 'clsx'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { X } from 'lucide-react'
import { useState } from 'react'
import { DayPicker, type SelectSingleEventHandler } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { useOutside } from '@/hooks/useOutside'

import './DatePicker.scss'

dayjs.extend(LocalizedFormat)

interface IDatePicker {
  onChange: (value: string) => void
  value: string
  position: 'left' | 'right'
}

export function DatePicker({
  onChange,
  value,
  position = 'right'
}: IDatePicker) {
  const [selected, setSelected] = useState<Date>()
  const { isShow, setIsShow, ref } = useOutside(false)

  const handleDaySelect: SelectSingleEventHandler = date => {
    const ISOdate = date?.toISOString()

    setSelected(date)
    if (ISOdate) {
      onChange(ISOdate)
      setIsShow(false)
    } else {
      onChange('')
    }
  }

  return (
    <div
      className='relative'
      ref={ref}
    >
      <button onClick={() => setIsShow(!isShow)}>
        {value ? dayjs(value).format('LL') : 'Select date'}
      </button>
      {value && (
        <button
          className='datepicker'
          onClick={() => onChange('')}
        >
          <X size={14} />
        </button>
      )}
      {isShow && (
        <div
          className={cn(
            'absolute p-2.5 slide bg-sidebar z-50 shadow rounded-lg',
            position === 'left' ? '-left-11' : '-right-4'
          )}
          style={{ top: 'calc(100% + .7rem)' }}
        >
          <DayPicker
            mode='single'
            defaultMonth={selected}
            selected={selected}
            onSelect={handleDaySelect}
            weekStartsOn={1}
          />
        </div>
      )}
    </div>
  )
}
