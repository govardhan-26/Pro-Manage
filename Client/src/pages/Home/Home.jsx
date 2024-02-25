import { LoginInput, TaskInput, Taskholder } from '../../components'
const Home = () => {
  return (
    <div
      className=""
      style={{
        margin: '40px',
      }}
    >
      <LoginInput
        placeholder="email"
        type="text"
        icon="email"
      />
      <br />
      <LoginInput
        placeholder="password"
        type="password"
        icon="password"
      />
      <br />
      <LoginInput
        placeholder="person"
        type="text"
        icon="name"
      />
    </div>
  )
}

export default Home
