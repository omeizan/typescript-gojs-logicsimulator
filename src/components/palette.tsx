import * as go from 'gojs';
const $ = go.GraphObject.make;
import * as template from './nodeTemplates'

export function initPalette():go.Palette{
  
    var myPalette =
    $(go.Palette);
  
  // the Palette's node template is different from the main Diagram's
  myPalette.nodeTemplate =
    $(go.Node, "Horizontal",
      $(go.Shape,
        { width: 14, height: 14, fill: "white" },
        new go.Binding("fill", "color")),
      $(go.TextBlock,
        new go.Binding("text", "color"))
    );
  
    myPalette.nodeTemplateMap.add("input", template.pInputTemplate);
    myPalette.nodeTemplateMap.add("output", template.pOutputTemplate);
    myPalette.nodeTemplateMap.add("and", template.pAndTemplate);
    myPalette.nodeTemplateMap.add("or", template.PorTemplate);
    myPalette.nodeTemplateMap.add("xor", template.PxorTemplate);
    myPalette.nodeTemplateMap.add("not", template.PnotTemplate);
    myPalette.nodeTemplateMap.add("nand", template.PnandTemplate);
    myPalette.nodeTemplateMap.add("nor", template.PnorTemplate);
    myPalette.nodeTemplateMap.add("xnor", template.PxnorTemplate);
    myPalette.nodeTemplateMap.add("fixedHigh", template.pfixedHighTemplate);
    myPalette.nodeTemplateMap.add("fixedLow", template.pfixedLowTemplate);
  // the list of data to show in the Palette
  myPalette.model.nodeDataArray = [
    { category: "input"},
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
  
  ];
  return myPalette;
  }
  