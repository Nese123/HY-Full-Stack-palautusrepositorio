import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick = {props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td style={{ width: '50px' }}>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    ) 
  } else {
      return (
        <div>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={props.positive} />
        </div>
      )
  }

  
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = ((good - bad) / all).toFixed(1)
  const positive = `${((good / all) * 100).toFixed(1)} %`

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick = {handleGood} text = 'good'/>
      <Button onClick = {handleNeutral} text = 'neutral'/>
      <Button onClick = {handleBad} text = 'bad'/>
      <h2>statistics</h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all}
      average = {average} positive = {positive}/>
    </div>
  )
}

export default App