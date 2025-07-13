import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [password, setPassword] = useState('')
  const [passwordlength, setpasswordLength] = useState(6)
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)

   const [copyMessageVisible, setCopyMessageVisible] = useState(false)


  const passwordDisplayRef = useRef(null);

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  const passwordGenerator = useCallback(() => {
    let availableChars = ""
    let generatedPassword = ""

    if (numberAllowed) {
      availableChars += numberChars
    }
    if (includeUppercase) {
      availableChars += uppercaseChars
    }
    if (includeLowercase) {
      availableChars += lowercaseChars
    }
    if (specialCharAllowed) {
      availableChars += symbolChars
    }

    if (availableChars.length === 0) {
      setPassword("Please select at least one option")
      return
    }

    for (let i = 0; i < passwordlength; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length)
      generatedPassword += availableChars[randomIndex]


    }
    setPassword(generatedPassword)


  }, [passwordlength, includeLowercase, includeUppercase, numberAllowed, specialCharAllowed, setPassword])

  // useEffect hook to generate password on initial load and when criteria change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  const copyPassword = useCallback(() => {
    if (passwordDisplayRef.current) {
      passwordDisplayRef.current.select(); // Select the text in the input field
  
      passwordDisplayRef.current.setSelectionRange(0, 16);

      try {
        setCopyMessageVisible(true);
        setTimeout(() => {
          setCopyMessageVisible(false);
        }, 1500);
      } catch (err) {
        console.error('Failed to copy password: ', err);;
        
      }
    }


  }, [])


  return (
    <>
      <div className='bg-zinc-900 h-screen w-full relative  '>
        <h1 className='text-zinc-600 capitalize text-[5.5vw] font-semibold absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] tracking-tighter leading-none'>password generator</h1>

        <div className='absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] w-[90vw] max-w-[450px]  bg-zinc-500/25 rounded-lg shadow-lg flex flex-col justify-center items-center shadow-mb shadow-zinc-500/50  py-5'>

          <h1 className='text-3xl text-zinc-300 '>Password Generator</h1>
          <p className='text-zinc-400 text-sm mt-2'>Generate a secure password with the desired length and complexity.</p>

          <div className='mt-4 w-full px-4 flex justify-center items-center relative '>
            <input type="text" className='w-full h-12 px-4 bg-zinc-700 text-zinc-300 rounded-l-lg outline-none focus:ring-2 focus:ring-zinc-500' placeholder='Generated Password relative' readOnly
              id="passwordDisplay"
              value={password}
              ref={passwordDisplayRef}
            />
            <button
              id='copyButton'
              onClick={copyPassword}
              className='bg-blue-700  h-[50px]  px-5 t rounded-r-md text-zinc-300  left-full'
            >copy</button>
          <div
            id="copyMessage"
            className={`absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-blue-600 transition-all duration-300 ${copyMessageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
          >
            Copied!
          </div>
          </div>


          {/* range input */}

          <div className="mt-14 flex w-3/4 justify-center items-center">
            <label htmlFor="passwordLength" className="block text-zinc-300 text-sm font-medium mb-2">
              Password Length: <span id="lengthValue" className="text-zinc-300 font-semibold">{passwordlength}</span>
            </label>
            <input
              type="range"
              id="passwordLength"
              min="6"
              max="30"
              value={passwordlength}
              onChange={(e) => setpasswordLength(e.target.value)}

              className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-blue-600 shadow-inner"
            />
          </div>

          {/* checkboxes */}
          {/* Character Type Checkboxes */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeUppercase"
                checked={includeUppercase}
                onChange={(e) => { setIncludeUppercase(e.target.checked) }}
                className="h-5 w-5 rounded cursor-pointer"
              />
              <label htmlFor="includeUppercase" className="ml-3 text-gray-300 text-base select-none">Include Uppercase Letters</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeLowercase"
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                className="h-5 w-5  rounded cursor-pointer"
              />
              <label htmlFor="includeLowercase" className="ml-3 text-gray-300 text-base select-none">Include Lowercase Letters</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeNumbers"
                checked={numberAllowed}
                onChange={(e) => setnumberAllowed(e.target.checked)}
                className="h-5 w-5  border-gray-600 rounded cursor-pointer"
              />
              <label htmlFor="includeNumbers" className="ml-3 text-gray-300 text-base select-none">Include Numbers</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="includeSymbols"
                checked={specialCharAllowed}
                onChange={(e) => setSpecialCharAllowed(e.target.checked)}
                className="h-5 w-5  border-gray-600 rounded  cursor-pointer"
              />
              <label htmlFor="includeSymbols" className="ml-3 text-gray-300 text-base select-none">Include Symbols</label>
            </div>
          </div>

          {/* Generate Button */}
          <button
            id="generateButton"
            onClick={passwordGenerator}
            className="w-2/3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-3 rounded-lg shadow-xl transform transition-all duration-200 active:scale-95 focus:outline-none  tracking-wide text-lg mb-5"
          >
            Generate Password
          </button>

        </div>

      </div>
    </>

  )
}

export default App
