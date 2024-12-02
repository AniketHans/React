import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacters, setIsCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) {
      str = str.concat("0123456789");
    }
    if (isCharacters) {
      str = str.concat("!@#$%^&*");
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str[randomIndex];
    }

    setPassword(pass);
  }, [length, isNumber, isCharacters, setPassword]);

  useEffect(() => {
    generatePassword();
  }, [length, isCharacters, isNumber, generatePassword]);

  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password); //Here we are able to access the window object because the react is ultimately going to convert into JS.
  };

  return (
    <div className="w-full flex-row justify-items-center">
      <h1 className="text-center text-4xl text-white">Password Generator</h1>
      <div className="w-full justify-center bg-gray-700">
        <div className="flex justify-center w-full px-2 py-2 m-3 ">
          <input
            className="w-full max-w-md rounded-3xl p-2 overflow-hidden border-solid"
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="px-4 mx-1 bg-blue-600 text-white rounded-3xl"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-4 justify-center">
          <div className="flex gap-x-1">
            <input
              type="range"
              max={50}
              min={8}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-white">Length:{length}</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isNumber}
              id="isNumber"
              onChange={() => setIsNumber((prev) => !prev)}
            />
            <label className="text-white">Allow Number</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={isCharacters}
              id="isCharacter"
              onChange={() => setIsCharacters((prev) => !prev)}
            />
            <label className="text-white">Allow Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
