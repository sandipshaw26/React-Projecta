import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function handleCreateRandomHexColor() {
        //#544544
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
          hexColor += hex[randomColorUtility(hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
  }
  function handleCreateRandomRGBColor() {
   const r = randomColorUtility(256);
   const g = randomColorUtility(256);
   const b = randomColorUtility(256);

   setColor(`rgb(${r},${g},${b})`);

  }
  useEffect(()=>{
    if (typeOfColor === "hex") 
        handleCreateRandomHexColor();
    else handleCreateRandomRGBColor();
    }, [typeOfColor]);
  

  return (
    <div 
    style={{
        width:'100vw',
        height:'100vh',
        background: color
    }}
    className="container">
      <button
        onClick={() => 
          setTypeOfColor("hex")
        }
        className="btn"
      >
        Create Hex Color
      </button>
      <button onClick={() => setTypeOfColor("rgb")} className="btn">Create RGB color</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRGBColor
        }
        className="btn"
      >
        Generate Random Color
      </button>
      <div
       style={{
        display:'flex',
        justifyContent: "center",
        alignItems:"center",
        height: '66vh',
        color: '#fff',
        fontSize: '60px',
        marginTop: "auto",
        flexDirection: 'column',
        padding:'16px'
        }
       }
      >
       <h5>{typeOfColor === 'rgb' ? 'RGB Color':'HEX Color'}</h5>
       <h1>{color}</h1>
      </div>
    </div>
  );
}
