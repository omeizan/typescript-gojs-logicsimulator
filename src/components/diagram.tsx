import * as go from 'gojs';
const $ = go.GraphObject.make;
import * as template from './nodeTemplates'


var red = "orangered";  // 0 or false
var green = "forestgreen";  // 1 or true

 export function initDiagram() {
    
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram =
      $(go.Diagram,
        {
          'undoManager.isEnabled': true,  // must be set to allow for model change listening
          // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
          'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'red' },
          model: new go.GraphLinksModel(
            {
              linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
            })
        });
      diagram.skipsUndoManager = false;
        
  
        diagram.linkTemplate = 
        $(go.Link,
          { routing: go.Link.AvoidsNodes, curve:go.Link.Orthogonal },
            $(go.Shape,{
                name:"SHAPE"
            })
          );
   
        diagram.allowRelink = true;
        
        

        diagram.grid =
        $(go.Panel, "Grid",
            $(go.Shape, "LineH", { strokeWidth: 0.5, strokeDashArray: [0, 9.5, 0.5, 0] })
        );

        

        const numLinks = (fromNode: go.Node, fromPort: go.GraphObject, toNode: go.Node, toPort: go.GraphObject, link: go.Link) => {
          if(toNode.category == "not" ||toNode.category == "output"){
            return toNode.findLinksInto().count<1
          }
          else{
          return toNode.findLinksInto().count<2
          }
        }
        
        diagram.toolManager.draggingTool.isGridSnapEnabled = true;
        diagram.toolManager.linkingTool.linkValidation = numLinks;
        diagram.toolManager.relinkingTool.isEnabled = false;
  
      diagram.nodeTemplateMap.add("input", template.inputTemplate);
      diagram.nodeTemplateMap.add("output", template.outputTemplate);
      diagram.nodeTemplateMap.add("and", template.andTemplate);
      diagram.nodeTemplateMap.add("or", template.orTemplate);
      diagram.nodeTemplateMap.add("xor", template.xorTemplate);
      diagram.nodeTemplateMap.add("not", template.notTemplate);
      diagram.nodeTemplateMap.add("nand", template.nandTemplate);
      diagram.nodeTemplateMap.add("nor", template.norTemplate);
      diagram.nodeTemplateMap.add("xnor", template.xnorTemplate);
      diagram.nodeTemplateMap.add("fixedHigh",template.fixedHighTemplate);
      diagram.nodeTemplateMap.add("fixedLow",template.fixedLowTemplate);

    
  
    return diagram;
  }
  

  
export function updateStates(diagram:go.Diagram) {
   
   
  var inputOutputCount = 0;
    // do all "input" nodes first
    diagram.nodes.each(node => {
      if (node.category === "input") {
        doInput(node,inputOutputCount++);
      }
    });
    // now we can do all other kinds of nodes
    diagram.nodes.each(node => {
      switch (node.category) {
        case "and": doAnd(node); break;
        case "or": doOr(node); break;
        case "xor": doXor(node); break;
        case "not": doNot(node); break;
        case "nand": doNand(node); break;
        case "nor": doNor(node); break;
        case "xnor": doXnor(node); break;
        case "fixedHigh":doFixedHigh(node); break;
        case "fixedLow":doFixedLow(node);break;
        case "output": doOutput(node,inputOutputCount++); break;
        case "input": break;  // doInput already called, above
      }
    });
   
    return diagram;
  }
  function linkIsTrue(link:go.Link) {  // assume the given Link has a Shape named "SHAPE"
    return (link.findObject("SHAPE") as go.Shape).stroke === green;
  }
 
  // helper function for propagating results
  function setOutputLinks(node:go.Node, color:string) {
    node.findLinksOutOf().each(link => (link.findObject("SHAPE") as go.Shape).stroke = color);
  }

  // update nodes by the specific function for its type
  // determine the color of links coming out of this node based on those coming in and node type

  function doInput(node:go.Node,count:number) {
    
    var shp= node.findObject("title") as go.TextBlock
  
    shp.text = numberToAlphabet(count);
    setOutputLinks(node, (node.findObject("NODESHAPE") as go.Shape).fill as string);
  }

  function doFixedHigh(node:go.Node){
    setOutputLinks(node, green);
  }
  function doFixedLow(node:go.Node){
    setOutputLinks(node, red);
  }

  function doAnd(node:go.Node) {
    var color = node.findLinksInto().all(linkIsTrue) ? green : red;
    setOutputLinks(node, color);
  }
  function doNand(node: go.Node) {
    var color = !node.findLinksInto().all(linkIsTrue) ? green : red;
    setOutputLinks(node, color);
  }
  function doNot(node: go.Node) {
    var color = !node.findLinksInto().all(linkIsTrue) ? green : red;
    setOutputLinks(node, color);
  }

  function doOr(node: go.Node) {
    var color = node.findLinksInto().any(linkIsTrue) ? green : red;
    setOutputLinks(node, color);
  }
  function doNor(node: go.Node) {
    var color = !node.findLinksInto().any(linkIsTrue) ? green : red;
    setOutputLinks(node, color);
  }

  function doXor(node: go.Node) {
    var truecount = 0;
    node.findLinksInto().each((link: go.Link)=> { if (linkIsTrue(link)) truecount++; });
    var color = truecount % 2 !== 0 ? green : red;
    setOutputLinks(node, color);
  }
  function doXnor(node:go.Node) {
    var truecount = 0;
    node.findLinksInto().each((link: go.Link) => { if (linkIsTrue(link)) truecount++; });
    var color = truecount % 2 === 0 ? green : red;
    setOutputLinks(node, color);
  }

  function numberToAlphabet(num:number) {
    let str = "";
    let offset = num + 1
    while (offset > 0) {
        offset--; 
        str = String.fromCharCode(65 + (offset % 26)) + str;
        offset = Math.floor(offset / 26);
    }
    return str.toUpperCase();
}

  function doOutput(node:go.Node,count:number) {
    var shp= node.findObject("title") as go.TextBlock
    shp.text = numberToAlphabet(count);
    node.linksConnected.each((link:go.Link) => { (node.findObject("NODESHAPE") as go.Shape).fill  = (link.findObject("SHAPE") as go.Shape).stroke; });
  }
