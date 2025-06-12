import { useState } from 'react'
import TextInput from './components/TextInput'
import JsonOutput from './components/JsonOutput'
import Navbar from './components/Navbar'
import { parseQuestions } from './utils/parser'

function App() {
  const [inputText, setInputText] = useState('')
  const [jsonData, setJsonData] = useState(null)
  const [startId, setStartId] = useState('')

  const handleInputChange = (e) => {
    const text = e.target.value
    setInputText(text)
    const parsedData = parseQuestions(text, parseInt(startId) || 1)
    setJsonData(parsedData)
  }

  const handleIdChange = (e) => {
    const value = e.target.value
    setStartId(value)
    if (inputText) {
      const parsedData = parseQuestions(inputText, parseInt(value) || 1)
      setJsonData(parsedData)
    }
  }

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        {/* Left Section */}
        <div className="input-section">
          <div className="card">
            <div className="id-input-container">
              <label htmlFor="startId">Starting Question ID:</label>
              <input
                type="number"
                id="startId"
                value={startId}
                onChange={handleIdChange}
                className="input"
                min="1"
                placeholder="Enter ID"
              />
            </div>
            <TextInput value={inputText} onChange={handleInputChange} />
          </div>
        </div>

        {/* Right Section */}
        <div className="output-section">
          {jsonData && jsonData.length > 0 && (
            <div className="card">
              <JsonOutput jsonData={jsonData} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
