import { useEffect, useState } from 'react'

function App() {
  const [text, setText] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [aiReady, setAiReady] = useState(false)
  const [currentAudio, setCurrentAudio] = useState(null)

  useEffect(() => {
    const checkAiReady = setInterval(() => {
      if (window.puter
        && window.puter.ai
        && typeof window.puter.ai.text2speech === "function"
      ) {
        setAiReady(true)
        clearInterval(checkAiReady)
      }
    }, 300);
    return () => clearInterval(checkAiReady)
  }, [])

  const speechText = async () => {
    if (text.length > 3000) {
      setError("Text must be less than 3000 characters!")
      return
    }
    if (!text.trim()) {
      setError("Please enter some text!")
      return
    }
    setLoading(true)
    setError("")

    if (currentAudio) {
      currentAudio.pause()
      currentAudio.currentTime = 0
    }

    try {
      const audio = window.puter.ai.text2speech(text, {
        engine: "basic",
        language: "en-US"
      })
      setCurrentAudio(audio)
      audio.play()
      audio.addEventListener("ended", () => setLoading(false))
      audio.addEventListener("error", () => setLoading(false))

    } catch (error) {
      setError(error?.message || "Something went wrong")
      setLoading(false)
    }
  }

  const stopAudio = () => {
    if (currentAudio) {
      currentAudio.pause()
      currentAudio.currentTime = 0
      setCurrentAudio(null)
      setLoading(false)
    }
  }

  return (
    <div className="h-screen w-full bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 flex items-center justify-center">
      <div className="w-96 flex justify-center items-center flex-col gap-6 p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
        <h1 
          className="text-4xl font-bold bg-gradient-to-r from-yellow-300 via-red-500 to-purple-600 bg-clip-text text-transparent mb-4"
          style={{
            backgroundImage: 'linear-gradient(45deg, #fbbf24, #ef4444, #8b5cf6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Text to Speech
        </h1>
        
        <textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your text here..."
          className="w-full h-32 py-3 px-4 outline-none rounded-lg resize-none border-2 border-gray-300 focus:border-blue-500 transition-colors duration-200"
          maxLength={3000}
        />
        
        <div className="text-sm text-white/80">
          {text.length}/3000 characters
        </div>

        {error && (
          <div className="text-red-300 text-sm bg-red-500/20 px-4 py-2 rounded-lg border border-red-500/30">
            {error}
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={speechText}
            disabled={!aiReady || loading || !text.trim()}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {loading ? "Speaking..." : "Speak Text"}
          </button>

          <button
            onClick={stopAudio}
            disabled={!currentAudio}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            Stop Audio
          </button>
        </div>

        {!aiReady && (
          <div className="text-yellow-300 text-sm bg-yellow-500/20 px-4 py-2 rounded-lg border border-yellow-500/30">
            Waiting for AI to be ready...
          </div>
        )}

        {loading && (
          <div className="flex items-center gap-2 text-white">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Converting text to speech...</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default App