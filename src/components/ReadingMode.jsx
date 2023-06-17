import React from "react"
import DateTime from "./DateTime"

const ReadingMode = ({ textSize, setTextSize, showFig, setShowFig }) => {
  const handleReadMode = () => {
    setShowFig(!showFig)
  }

  const handleMinimize = () => {
    if (textSize !== 0) {
      setTextSize(textSize - 1)
    } else {
      return
    }
  }

  const handleBaseSize = () => {
    setTextSize(1)
  }

  const handleMagnify = () => {
    if (textSize < 6) {
      setTextSize(textSize + 1)
    } else {
      return
    }
  }

  return (
    <div className="flex flex-col justify-between items-center max-w-[41rem] ss:flex-row">
      <DateTime />
      <div className="flex space-x-4">
        <button className="font-medium bg-gray-200 rounded-2xl py-1 px-3" >
          <i className="fa-solid fa-share-nodes mr-2"></i>
          Share
        </button>
        <div className="flex bg-gray-200 rounded-2xl py-1 px-2">
          <button className="border-r-2 border-gray-300 text-sm px-2" onClick={handleReadMode} >
            <i className="fa-regular fa-newspaper mr-2"></i>
            {showFig ? "Enable reading mode" : "Disable reading mode"}
          </button>
          <div className="flex justify-around items-center px-2 space-x-3 text-sm">
            <button onClick={handleMinimize}>A-</button>
            <button onClick={handleBaseSize}>A</button>
            <button onClick={handleMagnify}>A+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadingMode
