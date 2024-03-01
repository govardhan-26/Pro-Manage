import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cardholder, Dropdown } from '../../components'
import { useGetDateFilterQuery } from '../../store/api/todoapi'
import { DateToday } from '../../utils/date'
import './Board.css'
import {
  updateTaskCount,
  updatePriorityCount,
} from '../../store/slices/taskSlice'
const BoardPage = () => {
  const [filter, setFilter] = useState('week')
  const dispatch = useDispatch()
  const {
    userInfo: { userName },
  } = useSelector((state) => state.auth)
  const { data, refetch, isSuccess } = useGetDateFilterQuery(filter)
  useEffect(() => {
    refetch()
  }, [])
  const BACKLOG = data?.todos.filter((x) => x.label === 'BACKLOG')
  const TODO = data?.todos.filter((x) => x.label === 'TO-DO')
  const DONE = data?.todos.filter((x) => x.label === 'DONE')
  const PROGRESS = data?.todos.filter((x) => x.label === 'PROGRESS')
  const HighPr = data?.todos
    .filter((x) => x.label != 'DONE')
    .filter((x) => x.priority === 'HIGH')
  const ModeratePr = data?.todos
    .filter((x) => x.label != 'DONE')
    .filter((x) => x.priority === 'MODERATE')
  const LowPr = data?.todos
    .filter((x) => x.label != 'DONE')
    .filter((x) => x.priority === 'LOW')
  const dueDateTasks = data?.todos
    .filter((x) => x.label != 'DONE')
    .filter((x) => x.date != null)
  if (isSuccess) {
    dispatch(
      updateTaskCount({
        backlogs: BACKLOG.length,
        todotasks: TODO.length,
        progresstasks: PROGRESS.length,
        completedTasks: DONE.length,
      }),
    )
    dispatch(
      updatePriorityCount({
        lowPriority: LowPr.length,
        highPriority: HighPr.length,
        moderatePriority: ModeratePr.length,
        dueDateTasks: dueDateTasks.length,
      }),
    )
  }

  return (
    <div className="board-container">
      <div className="board-upper">
        <div className="board-upper-content">
          <div className="board-welcome-text">
            <div className="w-text">Welcome! {userName}</div>
            <div className="w-date">{DateToday}</div>
          </div>
          <div className="board-heading">
            <p className="board-heading-text">Board</p>
            <Dropdown setFilter={(data) => setFilter(data)} />
          </div>
        </div>
      </div>
      <div className="board-wrapper">
        <div className="board-cards">
          <Cardholder
            todos={BACKLOG}
            heading="Backlog"
            plusSymbol={false}
          />
          <Cardholder
            todos={TODO}
            heading="To-do"
            plusSymbol={true}
          />
          <Cardholder
            todos={PROGRESS}
            heading="Progress"
            plusSymbol={false}
          />
          <Cardholder
            heading="Done"
            todos={DONE}
            plusSymbol={false}
          />
        </div>
      </div>
    </div>
  )
}

export default BoardPage
