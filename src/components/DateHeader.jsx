import { useMemo } from 'react'
import { getLocalTime } from '../utils/getLocalTime'

export default function DateHeader() {
    const { day, monthName, time } = useMemo(() => getLocalTime(), [])
    return (
        <h3 className="text-center text-4xl">
            <span className="font-bold text-white">
                <span className="font-extrabold text-gradient">{day}</span> de{' '}
                <span className="capitalize">{monthName}</span>
            </span>
            <span className="font-extrabold text-gradient"> • </span>
            <span className="text-gray-500 ">{`${time} Hs`}</span>
        </h3>
    )
}
