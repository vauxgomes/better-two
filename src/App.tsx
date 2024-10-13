import { Switch } from '@mantine/core'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function App() {
  let { label1, label2, label3 } = useParams()

  const [switches, setSwitches] = useState([false, false, false])
  const [labels, setLabels] = useState([label1, label2, label3])
  const [count, setCount] = useState(0)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const count_ = Math.max(0, count + (event.currentTarget.checked ? 1 : -1))

    if (count_ == 3) {
      const reset = (idx + 1) % 3
      setSwitches((switches) =>
        switches.map((s, i) => (i == idx || i == reset ? !s : s))
      )
    } else {
      setSwitches((switches) => switches.map((s, i) => (i == idx ? !s : s)))
    }

    setCount(Math.min(2, count_))
  }

  return (
    <main>
      {labels.map((label, idx) => (
        <Switch
          key={idx}
          size="lg"
          color="teal"
          checked={switches[idx]}
          onChange={(event) => handleChange(event, idx)}
          label={label}
        />
      ))}
    </main>
  )
}

export default App
