import React from "react";
import { useState, useCallback, useEffect } from "react";

const App = () => {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordGenerate = useCallback(() => {
    let pass = "";
    let str = 'QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgasdfzxcvbnm';

    if(numberAllowed) {
      str += '1234567890';
    }

    if(charAllowed) {
      str += '!@#$%^&*()_+}{|":<>?';
    }

    for(let i=1;i<=length;i++) {
      let passwordValue = Math.floor(Math.random() * str.length)
      pass = pass + str.charAt(passwordValue);
    } 

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword] )
  

  useEffect(() => {
    passwordGenerate();
  }, [length, numberAllowed, charAllowed, passwordGenerate])

  return (
    <div className='h-screen bg-cover bg-no-repeat flex items-center justify-center'

      style={{backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >

      <div className='bg-gray-500/30 w-full max-w-xl text-center mt-5 px-4 py-3 text-white shadow-md rounded-lg'>

        <h1 className='text-2xl'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3 text-gray-900'>
          <input type='text'
            placeholder='Password'
            className='bg-white w-full py-1 px-3'
            readOnly
            value={password}
          />
          <button className='bg-blue-600 text-white px-3'>
            copy
          </button>
        </div>

        <div className='flex text-sm gap-x-5'>
          
          <div className='flex items-center gap-x-1'>
            <input 
              type='range' 
              value={length}
              min={6}
              max={100}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-5'>
            <div className="flex gap-x-1">
              <input 
                type='checkbox'
                onClick={() => setNumberAllowed((val) => !val)}                
              />
              <label>Numbers</label>
            </div>

            <div className='flex gap-x-1'>
              <input 
                type='checkbox'
                onClick={() => setCharAllowed((val) => !val)}
              />
              <label>Characters</label>
            </div>
          </div>
        
        </div>


      </div>

    </div>
  )
}

export default App




// import React, { useState, useCallback, useEffect, useRef } from "react";

// const App = () => {

//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState('');

//   const passwordRef = useRef(null);

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select()
//     password.current?.setSelectionRange(0,100);
//     window.navigator.clipboard.writeText(password)
//   }, [password])

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'

//     if(numberAllowed) {
//       str = str + '0123456789'
//     }
//     if(charAllowed) {
//       str = str + '~!@#$%^&*()_+{}":><?[]';
//     }

//     for(let i=1;i<=length;i++) {
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass = pass + str.charAt(char)
//     }

//     setPassword(pass)

//   }, [length, numberAllowed, charAllowed, setPassword])

//   useEffect(() => {
//     passwordGenerator()
//   }, [length, numberAllowed, charAllowed, passwordGenerator])

//   return (
//     <>
//       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center'>

//         <h1 className='text-white text-center'>Password Generator</h1>

//         <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3 text-gray-900">
//           <input 
//             type='text'
//             value={password}
//             placeholder="Password"
//             className='outline-none w-full py-1 px-3 bg-white'
//             readOnly
//             ref={passwordRef}
//           />
//           <button
//             onClick={copyPasswordToClipboard}
//             className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//           >Copy</button>
//         </div>

//         <div className='flex text-sm gap-x-2'>
//           <div className='flex items-center gap-x-1'>
//             <input 
//               type='range'
//               min={6}
//               max={100}
//               value={length} 
//               className="cursor-pointer"
//               onChange={(e) => {setLength(e.target.value)}}
//             /> 
//             <label>Length: {length}</label>
//           </div>
          
//           <div className='flex items-center gap-x-1'>
//             <input 
//               type='checkbox'
//               defaultChecked={numberAllowed}
//               id='numberInput'
//               onChange={() => {
//                   setNumberAllowed((val) => !val)
//               }}
//             />
//             <label htmlFor='numberInput'>Number</label>
//           </div>

//           <div className='flex items-center gap-x-1'>
//             <input 
//               type='checkbox'
//               defaultCheckbox={charAllowed}
//               id='characterInput'
//               onChange={() => {
//                   setCharAllowed((val) => !val);
//               }}
//             />
//             <label htmlFor='characterInput'>Character</label>
//           </div>
//         </div>

//       </div>
//     </>
//   )
// }

// export default App;