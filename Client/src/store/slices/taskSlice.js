import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'task',
  initialState: {
    backlogs: 0,
    todotasks: 0,
    progresstasks: 0,
    completedTasks: 0,
    lowPriority: 0,
    highPriority: 0,
    moderatePriority: 0,
    dueDateTasks: 0,
  },
  reducers: {
    updateTaskCount: (state, action) => {
      const { backlogs, todotasks, progresstasks, completedTasks } =
        action.payload
      state.backlogs = backlogs
      state.todotasks = todotasks
      state.progresstasks = progresstasks
      state.completedTasks = completedTasks
    },
    updatePriorityCount: (state, action) => {
      const { lowPriority, highPriority, moderatePriority, dueDateTasks } =
        action.payload
      state.lowPriority = lowPriority
      state.highPriority = highPriority
      state.moderatePriority = moderatePriority
      state.dueDateTasks = dueDateTasks
    },
  },
})

export const { updateTaskCount, updatePriorityCount } = tasksSlice.actions
export default tasksSlice.reducer
