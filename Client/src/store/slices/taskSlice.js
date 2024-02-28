import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  tasks: [],
}
const taskSlice = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const { title, priority, label, date, task } = action.payload
      const newTask = {
        id: '', 
        title: title !== undefined ? title : '',
        priority: priority !== undefined ? priority : '',
        label: label !== undefined ? label : '',
        date: date !== undefined ? date : '',
        tasks: task !== undefined ? [...task] : [],
      }
      state.tasks.push(newTask)
    },
  },
})

export const { addTask } = taskSlice.actions
export default taskSlice.reducer
