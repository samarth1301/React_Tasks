import React, { useState } from 'react';
const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'cyan',
    'magenta',
    'pink',
    'purple',
    'brown',
    'gray',
    'black',
    'white',
    'silver',
    'gold',
    'teal',
    'lime',
    'maroon'
  ];
const Task3 = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsOpen(!isOpen);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <>
    <div className='m-5 d-flex justify-content-center'>
      
      {isOpen ? (
        <ul className='mt-5'>
          {colors.map((color) => (
            <li
              key={color}
              style={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                display: 'inline-block',
                marginRight: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleColorSelection(color)}
            ></li>
          ))}
        </ul>
      ) :
      <button className='btn text-white bg-primary align-center' onClick={toggleColorList}>Pick a color</button>
      }
    </div>
      {selectedColor && <h6 className='mt-2 p-2 rounded' style={{background:`${selectedColor}`}}>Selected Color: {selectedColor}</h6>}
    </>
  );
};

export default Task3;