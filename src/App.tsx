import React ,{useState,useRef,useEffect}from 'react';

import * as go from 'gojs';
import { ReactDiagram, ReactPalette,ReactOverview} from 'gojs-react';
import * as template from './components/nodeTemplates'
import * as myPalette from './components/palette'
import * as myDiagram from './components/diagram'

import './App.css';  // contains .diagram-component CSS

// ...
const $ = go.GraphObject.make;	
//


/**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is dicussed below.
 */
 




// render function...
function App() {


 const [data,setData] = useState(myDiagram.initDiagram)
 const [table,setTable] = useState(<></>)

  const ref = useRef(null)

  const init = myDiagram.initDiagram()
  loop();
  
  function loop() {
    setTimeout(() => { setData(myDiagram.updateStates(data)); loop(); }, 250);
  }
  
  const handleModelChange=(obj:go.ObjectData)=>{
   
   
 }
  

  
 
  
 
 
  return (
    <div className='App'>
    
      <ReactDiagram
        initDiagram={()=>data}
        divClassName='diagram-component'
        
        nodeDataArray={[
        
        ]}
        linkDataArray={[
          
        ]}
        
        onModelChange={handleModelChange}
        
        
        
      />
    
      <div className = "panel">
      <ReactPalette
        
        initPalette={myPalette.initPalette}
        divClassName = "mypalette"
        nodeDataArray={[
          { category: "input" },
          { category: "output" },
          { category: "and" },
          { category: "or" },
          { category: "xor" },
          { category: "not" },
          { category: "nand" },
          { category: "nor" },
          { category: "xnor" },
          { category: "fixedHigh" },
          { category: "fixedLow" }
      ]}
      ></ReactPalette>
      <div className='truth-table' id = "truth" ref={ref}>
        
      </div>
      </div>
      
    </div>
  );
}

export default App;