import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [lengthOfPass, setLengthOfPass] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?`~";
    console.log(lengthOfPass, "this is lengththth");
    for (let i = 1; i <= lengthOfPass; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      console.log(char, "this is char");
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [lengthOfPass, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(() => {
    passwordGenerator();
  }, [lengthOfPass, numberAllowed, charAllowed]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center  bg-gray-700 shadow-md rounded-lg px-4 py-2 w-full sm:w-96 md:w-180 mb-4">
        <h2 className="text-white">Password Generator</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-5">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={10}
              value={lengthOfPass}
              className="cursor-pointer"
              onChange={(e) => {
                setLengthOfPass(e.target.value);
              }}
            />
            <label className="text-red-500">Length:{lengthOfPass}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="text-red-500">
              Number
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput" className="text-red-500">
              Character
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
