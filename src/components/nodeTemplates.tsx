
import * as go from 'gojs';
import { ReactDiagram, ReactPalette } from 'gojs-react';



const $ = go.GraphObject.make;
const KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
//
var red = "orangered";  // 0 or false
var green = "forestgreen";  // 1 or true

go.Shape.defineFigureGenerator('NandGate', (shape, w, h) => {
  const geo = new go.Geometry();
  const cpxOffset = KAPPA * .5;
  const cpyOffset = KAPPA * .4;
  const cpOffset = KAPPA * .1;
  const radius = .1;
  const centerx = .9;
  const centery = .5;
  const fig = new go.PathFigure(.8 * w, .5 * h, true);
  geo.add(fig);

  // The gate body
  fig.add(new go.PathSegment(go.PathSegment.Bezier, .4 * w, h, .8 * w, (.5 + cpyOffset) * h,
    (.4 + cpxOffset) * w, h));
  fig.add(new go.PathSegment(go.PathSegment.Line, 0, h));
  fig.add(new go.PathSegment(go.PathSegment.Line, 0, 0));
  fig.add(new go.PathSegment(go.PathSegment.Line, .4 * w, 0));
  fig.add(new go.PathSegment(go.PathSegment.Bezier, .8 * w, .5 * h, (.4 + cpxOffset) * w, 0,
    .8 * w, (.5 - cpyOffset) * h));
  const fig2 = new go.PathFigure((centerx + radius) * w, centery * h, true);
  geo.add(fig2);
  // Inversion
  fig2.add(new go.PathSegment(go.PathSegment.Bezier, centerx * w, (centery + radius) * h, (centerx + radius) * w, (centery + cpOffset) * h,
    (centerx + cpOffset) * w, (centery + radius) * h));
  fig2.add(new go.PathSegment(go.PathSegment.Bezier, (centerx - radius) * w, centery * h, (centerx - cpOffset) * w, (centery + radius) * h,
    (centerx - radius) * w, (centery + cpOffset) * h));
  fig2.add(new go.PathSegment(go.PathSegment.Bezier, centerx * w, (centery - radius) * h, (centerx - radius) * w, (centery - cpOffset) * h,
    (centerx - cpOffset) * w, (centery - radius) * h));
  fig2.add(new go.PathSegment(go.PathSegment.Bezier, (centerx + radius) * w, (centery) * h, (centerx + cpOffset) * w, (centery - radius) * h,
    (centerx + radius) * w, (centery - cpOffset) * h));
  geo.spot1 = new go.Spot(0, .05);
  geo.spot2 = new go.Spot(.55, .95);
  return geo;
});

go.Shape.defineFigureGenerator('NorGate', (shape, w, h) => {
  const geo = new go.Geometry();
  let radius = .5;
  let cpOffset = KAPPA * radius;
  let centerx = 0;
  let centery = .5;
  const fig = new go.PathFigure(.8 * w, .5 * h, true);
  geo.add(fig);

  // Normal
  fig.add(new go.PathSegment(go.PathSegment.Bezier, 0, h, .7 * w, (centery + cpOffset) * h,
    (centerx + cpOffset) * w, (centery + radius) * h));
  fig.add(new go.PathSegment(go.PathSegment.Bezier, 0, 0, .25 * w, .75 * h,
    .25 * w, .25 * h));
  fig.add(new go.PathSegment(go.PathSegment.Bezier, .8 * w, .5 * h, (centerx + cpOffset) * w, (centery - radius) * h,
    .7 * w, (centery - cpOffset) * h));
  radius = .1;
  cpOffset = KAPPA * .1;
  centerx = .9;
  centery = .5;
  const fig2 = new go.PathFigure((centerx - radius) * w, centery * h, true);
  geo.add(fig2);
  // Inversion
  fig2.add(new go.PathSegment(go.PathSegment.Bezier, centerx * w, (centery - radius) * h, (centerx - radius) * w, (centery - cpOffset) * h,
    (centerx - cpOffset) * w, (centery - radius) * h));
  fig2.add(new go.PathSegment(go.PathSegment.Bezier, (centerx + radius) * w, centery * h, (centerx + cpOffset) * w, (centery - radius) * h,
    (centerx + radius) * w, (centery - cpOffset) * h));
  fig2.add(new go.PathSegment(go.PathSegment.Bezier, centerx * w, (centery + radius) * h, (centerx + radius) * w, (centery + cpOffset) * h,
    (centerx + cpOffset) * w, (centery + radius) * h));
  fig2.add(new go.PathSegment(go.PathSegment.Bezier, (centerx - radius) * w, centery * h, (centerx - cpOffset) * w, (centery + radius) * h,
    (centerx - radius) * w, (centery + cpOffset) * h));
  geo.spot1 = new go.Spot(.2, .25);
  geo.spot2 = new go.Spot(.6, .75);
  return geo;
});

go.Shape.defineFigureGenerator('XnorGate', (shape, w, h) => {
  const geo = new go.Geometry();
  let radius = .5;
  let cpOffset = KAPPA * radius;
  let centerx = .2;
  let centery = .5;
  const fig = new go.PathFigure(.1 * w, 0, false);
  geo.add(fig);

  // Normal
  fig.add(new go.PathSegment(go.PathSegment.Bezier, .1 * w, h, .35 * w, .25 * h, .35 * w, .75 * h));
  const fig2 = new go.PathFigure(.8 * w, .5 * h, true);
  geo.add(fig2);
  fig2.add(new go.PathSegment(go.PathSegment.Bezier, .2 * w, h, .7 * w, (centery + cpOffset) * h,
    (centerx + cpOffset) * w, (centery + radius) * h));
  fig2.add(new go.PathSegment(go.PathSegment.Bezier, .2 * w, 0, .45 * w, .75 * h, .45 * w, .25 * h));
  fig2.add(new go.PathSegment(go.PathSegment.Bezier, .8 * w, .5 * h, (centerx + cpOffset) * w, (centery - radius) * h,
    .7 * w, (centery - cpOffset) * h));
  radius = .1;
  cpOffset = KAPPA * .1;
  centerx = .9;
  centery = .5;
  const fig3 = new go.PathFigure((centerx - radius) * w, centery * h, true);
  geo.add(fig3);
  // Inversion
  fig3.add(new go.PathSegment(go.PathSegment.Bezier, centerx * w, (centery - radius) * h, (centerx - radius) * w, (centery - cpOffset) * h,
    (centerx - cpOffset) * w, (centery - radius) * h));
  fig3.add(new go.PathSegment(go.PathSegment.Bezier, (centerx + radius) * w, centery * h, (centerx + cpOffset) * w, (centery - radius) * h,
    (centerx + radius) * w, (centery - cpOffset) * h));
  fig3.add(new go.PathSegment(go.PathSegment.Bezier, centerx * w, (centery + radius) * h, (centerx + radius) * w, (centery + cpOffset) * h,
    (centerx + cpOffset) * w, (centery + radius) * h));
  fig3.add(new go.PathSegment(go.PathSegment.Bezier, (centerx - radius) * w, centery * h, (centerx - cpOffset) * w, (centery + radius) * h,
    (centerx - radius) * w, (centery + cpOffset) * h));
  geo.spot1 = new go.Spot(.4, .25);
  geo.spot2 = new go.Spot(.65, .75);
  return geo;
});

var helpers :{[name:string]:string}={
  "input": "Input node : Either 0(low) or 1(high) \nDouble click to change input values"
}
export var sharedToolTip =
        $("ToolTip",
          { "Border.figure": "RoundedRectangle" },
          $(go.TextBlock, { margin: 2 },
            new go.Binding("text", "", d => helpers[d.category])));

      // define some common property settings
      export function nodeStyle() {
        return [new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        new go.Binding("isShadowed", "isSelected").ofObject(),
        {
          selectionAdorned: false,
          shadowOffset: new go.Point(0, 0),
          shadowBlur: 15,
          shadowColor: "grey",
          toolTip: sharedToolTip,
          
        }];
      }

      export function shapeStyle() {
        return {
          name: "NODESHAPE",
          fill: "white",
          stroke: "darkslategray",
          desiredSize: new go.Size(45, 45),
          strokeWidth: 1
        };
      }

      export function shapeStyle2() {
        return {
          name: "NODESHAPE",
          fill: "white",
          stroke: "darkslategray",
          desiredSize: new go.Size(45, 45),
          strokeWidth: 0
        };
      }

      export function portStyle(input:any) {
        return {
          desiredSize: new go.Size(6, 6),
          fill: "white",
          fromLinkable: !input,
          toSpot: go.Spot.LeftSide,
          toLinkable: input,
          cursor: "pointer"
        };
      }

      export var fixedHighTemplate  =
      $(go.Node, "Spot", nodeStyle(),
        
      $(go.Shape, "Rectangle", shapeStyle(),
        { fill: "transparent",toSpot: go.Spot.LeftSide,
        fromSpot:go.Spot.Right}),  // override the default fill (from shapeStyle()) to be red
      $(go.Shape, "Circle", portStyle(false),  // the only port
        { portId: "", alignment: new go.Spot(1, 0.5) }),
        $(go.Panel,go.Panel.Position,
          $(go.TextBlock,
            {
              name:"value", 
              text: "1",
              font: "bold 14pt serif",
              stroke: "black",
              position:new go.Point(0,0),
          }
    
          )
       )
      
    );

    export var fixedLowTemplate  =
    $(go.Node, "Spot", nodeStyle(),
      
    $(go.Shape, "Rectangle", shapeStyle(),
      { fill: "transparent" ,toSpot: go.Spot.LeftSide,
      fromSpot:go.Spot.Right},),  // override the default fill (from shapeStyle()) to be red
    $(go.Shape, "Circle", portStyle(false),  // the only port
      { portId: "out", alignment: new go.Spot(1, 0.5) }),
      $(go.Panel,go.Panel.Position,
        $(go.TextBlock,
          {
            name:"value", 
            text: "0",
            font: "bold 14pt serif",
            stroke: "black",
            position:new go.Point(0,0),
        }
  
        )
     )
    
  );

      // define templates for each type of node
      export var inputTemplate =
        $(go.Node, "Spot", nodeStyle(),
          
          $(go.Shape, "Circle", shapeStyle(),
            { fill: "red",toSpot: go.Spot.LeftSide,
            fromSpot:go.Spot.Right},),  // override the default fill (from shapeStyle()) to be red
          $(go.Shape, "Circle", portStyle(false), // the only port
            { portId: "out", alignment:new go.Spot(1, 0.5)}),
            $(go.Panel,go.Panel.Position,
              $(go.TextBlock,
                {
                  name: "title",
                  text: "i",
                  font: "bold 14pt serif",
                  stroke: "white",
                  position:new go.Point(0,0),
              },
              
        
              )
           ),
           $(go.Panel,go.Panel.Position,
              
            $(go.TextBlock,
              {
                name:"value", 
                text: "",
                font: "bold 8pt serif",
                stroke: "white",
               position:new go.Point(20,20),
            }
      
            )
         ),
          { // if double-clicked, an input node will change its value, represented by the color.
            doubleClick: (e, obj) => {
              e.diagram.startTransaction("Toggle Input");
              
              var shp2 = (obj as go.Node).findObject("NODESHAPE");
              
              ((shp2 as go.Shape).fill as string) = ((shp2 as go.Shape).fill as string) === green?red:green;
             
              e.diagram.commitTransaction("Toggle Input");
            }
          }
        );

      export var outputTemplate =
        $(go.Node, "Spot", nodeStyle(),
          $(go.Shape, "RoundedRectangle", shapeStyle(),
            { fill: green,toSpot: go.Spot.LeftSide,
              fromSpot:go.Spot.Right},),  // override the default fill (from shapeStyle()) to be green
          $(go.Shape, "Circle", portStyle(true),  // the only port
            { portId: "", alignment: new go.Spot(0, 0.5) }),
            $(go.Panel,go.Panel.Position,
              
              $(go.TextBlock,
                {
                  name :"title",
                  text: "o",
                  font: "bold 14pt serif",
                  stroke: "white",
                 position:new go.Point(0,0),
              }
        
              )
           ),
            $(go.Panel,go.Panel.Position,
              
              $(go.TextBlock,
                {
                  name:"value", 
                  text: "",
                  font: "bold 8pt serif",
                  stroke: "white",
                 position:new go.Point(20,20),
              }
        
              )
           ),
        );

        go.Shape.defineFigureGenerator('AndGate', (shape, w, h) => {
          const geo = new go.Geometry();
          const cpOffset = KAPPA * .5;
          const fig = new go.PathFigure(0, 0, true);
          geo.add(fig);
        
          // The gate body
          fig.add(new go.PathSegment(go.PathSegment.Line, .5 * w, 0));
          fig.add(new go.PathSegment(go.PathSegment.Bezier, w, .5 * h, (.5 + cpOffset) * w, 0,
            w, (.5 - cpOffset) * h));
          fig.add(new go.PathSegment(go.PathSegment.Bezier, .5 * w, h, w, (.5 + cpOffset) * h,
            (.5 + cpOffset) * w, h));
          fig.add(new go.PathSegment(go.PathSegment.Line, 0, h).close());
          geo.spot1 = go.Spot.TopLeft;
          geo.spot2 = new go.Spot(.55, 1);
          return geo;
        });

      export var andTemplate =
        $(go.Node, "Spot", nodeStyle(),
          
        $(go.Shape, "AndGate", shapeStyle()),
          {toSpot: go.Spot.LeftSide,
           fromSpot:go.Spot.Right},
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in1", alignment: new go.Spot(0, 0.3)}),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in2", alignment: new go.Spot(0, 0.7) }),
          $(go.Shape, "Circle", portStyle(false),
            { portId: "out", alignment: new go.Spot(0.9, 0.5),stroke:"transparent",fill:"transparent" }),
        );
        go.Shape.defineFigureGenerator('OrGate', (shape, w, h) => {
          const geo = new go.Geometry();
          const radius = .5;
          const cpOffset = KAPPA * radius;
          const centerx = 0;
          const centery = .5;
          const fig = new go.PathFigure(0, 0, true);
          geo.add(fig);
        
          fig.add(new go.PathSegment(go.PathSegment.Bezier, w, .5 * h, (centerx + cpOffset + cpOffset) * w, (centery - radius) * h,
            .8 * w, (centery - cpOffset) * h));
          fig.add(new go.PathSegment(go.PathSegment.Bezier, 0, h, .8 * w, (centery + cpOffset) * h,
            (centerx + cpOffset + cpOffset) * w, (centery + radius) * h));
          fig.add(new go.PathSegment(go.PathSegment.Bezier, 0, 0, .25 * w, .75 * h, .25 * w, .25 * h).close());
          geo.spot1 = new go.Spot(.2, .25);
          geo.spot2 = new go.Spot(.75, .75);
          return geo;
        });

      export var orTemplate =
        $(go.Node, "Spot", nodeStyle(),
        $(go.Shape, "OrGate", shapeStyle()),
        {toSpot: go.Spot.LeftSide,
           fromSpot:go.Spot.Right},
        $(go.Shape, "Circle", portStyle(true),
            { portId: "in1", alignment: new go.Spot(0.16, 0.3) }),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in2", alignment: new go.Spot(0.16, 0.7) }),
            $(go.Shape, "Circle", portStyle(false),
            { portId: "out", alignment: new go.Spot(0.9, 0.5),stroke:"transparent",fill:"transparent" }),
        );


        go.Shape.defineFigureGenerator('XorGate', (shape, w, h) => {
          const geo = new go.Geometry();
          const radius = .5;
          const cpOffset = KAPPA * radius;
          const centerx = .2;
          const centery = .5;
          const fig = new go.PathFigure(.1 * w, 0, false);
          geo.add(fig);
        
          fig.add(new go.PathSegment(go.PathSegment.Bezier, .1 * w, h, .35 * w, .25 * h, .35 * w, .75 * h));
          const fig2 = new go.PathFigure(.2 * w, 0, true);
          geo.add(fig2);
          fig2.add(new go.PathSegment(go.PathSegment.Bezier, w, .5 * h, (centerx + cpOffset) * w, (centery - radius) * h,
            .9 * w, (centery - cpOffset) * h));
          fig2.add(new go.PathSegment(go.PathSegment.Bezier, .2 * w, h, .9 * w, (centery + cpOffset) * h,
            (centerx + cpOffset) * w, (centery + radius) * h));
          fig2.add(new go.PathSegment(go.PathSegment.Bezier, .2 * w, 0, .45 * w, .75 * h, .45 * w, .25 * h).close());
          geo.spot1 = new go.Spot(.4, .25);
          geo.spot2 = new go.Spot(.8, .75);
          return geo;
        });


      export var xorTemplate =
        $(go.Node, "Spot", nodeStyle(),
          $(go.Shape, "XorGate", shapeStyle()),
          {toSpot: go.Spot.LeftSide,
           fromSpot:go.Spot.Right},
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in1", alignment: new go.Spot(0.26, 0.3) }),
          $(go.Shape, "CIrcle", portStyle(true),
            { portId: "in2", alignment: new go.Spot(0.26, 0.7) }),
          $(go.Shape, "Circle", portStyle(false),
            { portId: "out", alignment: new go.Spot(1, 0.5),stroke:"transparent",fill:"transparent" })
        );

      export var norTemplate =
        $(go.Node, "Spot", nodeStyle(),
          
        $(go.Shape, "norGate", shapeStyle()),
        { toSpot: go.Spot.LeftSide,
          fromSpot:go.Spot.Right},
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in1", alignment: new go.Spot(0.16, 0.3) }),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in2", alignment: new go.Spot(0.16, 0.7) }),
            $(go.Shape, "Circle", portStyle(false),
            { portId: "out", alignment: new go.Spot(0.9, 0.5),stroke:"transparent" }),
        );

      export var xnorTemplate =
        $(go.Node, "Spot", nodeStyle(),
        
        $(go.Shape, "XnorGate", shapeStyle()),
        { toSpot: go.Spot.LeftSide,
          fromSpot:go.Spot.Right},
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in1", alignment: new go.Spot(0.26, 0.3) }),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in2", alignment: new go.Spot(0.26, 0.7) }),
            $(go.Shape, "Circle", portStyle(false),
            { portId: "out", alignment: new go.Spot(0.9, 0.5),stroke:"transparent" }),
        );

      export var nandTemplate =
        $(go.Node, "Spot", nodeStyle(),
        $(go.Shape, "NandGate", shapeStyle()),
        { toSpot: go.Spot.LeftSide,
          fromSpot:go.Spot.Right},
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in1", alignment: new go.Spot(0, 0.3) }),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in2", alignment: new go.Spot(0, 0.7) }),
            $(go.Shape, "Circle", portStyle(false),
            { portId: "out", alignment: new go.Spot(0.9, 0.5),stroke:"transparent" }),
        );
        
        go.Shape.defineFigureGenerator('Inverter', (shape, w, h) => {
          const geo = new go.Geometry();
          const cpOffset = KAPPA * .1;
          const radius = .1;
          const centerx = .9;
          const centery = .5;
          const fig = new go.PathFigure(.8 * w, .5 * h, true);
          geo.add(fig);
        
          fig.add(new go.PathSegment(go.PathSegment.Line, 0, h));
          fig.add(new go.PathSegment(go.PathSegment.Line, 0, 0));
          fig.add(new go.PathSegment(go.PathSegment.Line, .8 * w, .5 * h));
          const fig2 = new go.PathFigure((centerx + radius) * w, centery * h, true);
          geo.add(fig2);
          fig2.add(new go.PathSegment(go.PathSegment.Bezier, centerx * w, (centery + radius) * h, (centerx + radius) * w, (centery + cpOffset) * h,
            (centerx + cpOffset) * w, (centery + radius) * h));
          fig2.add(new go.PathSegment(go.PathSegment.Bezier, (centerx - radius) * w, centery * h, (centerx - cpOffset) * w, (centery + radius) * h,
            (centerx - radius) * w, (centery + cpOffset) * h));
          fig2.add(new go.PathSegment(go.PathSegment.Bezier, centerx * w, (centery - radius) * h, (centerx - radius) * w, (centery - cpOffset) * h,
            (centerx - cpOffset) * w, (centery - radius) * h));
          fig2.add(new go.PathSegment(go.PathSegment.Bezier, (centerx + radius) * w, centery * h, (centerx + cpOffset) * w, (centery - radius) * h,
            (centerx + radius) * w, (centery - cpOffset) * h));
          geo.spot1 = new go.Spot(0, .25);
          geo.spot2 = new go.Spot(.4, .75);
          return geo;
        });

        export var notTemplate =
      
        $(go.Node, "Spot", nodeStyle(),
          {
            toMaxLinks:1
        },
          
        $(go.Shape, "Inverter", shapeStyle()),
        { toSpot: go.Spot.LeftSide,
          fromSpot:go.Spot.Right},
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in", alignment: new go.Spot(0, 0.5) }),
          $(go.Shape, "Circle", portStyle(false),
            { portId: "out", alignment: new go.Spot(0.875, 0.5),stroke:"transparent" }),
        
          );


     export var PnotTemplate =
     $(go.Node, "Spot", nodeStyle(),
       
     $(go.Shape, "Inverter", shapeStyle()),
       $(go.Shape, "Circle", portStyle(true),
         { portId: "in", alignment: new go.Spot(0, 0.5) }),
       $(go.Shape, "Circle", portStyle(false),
         { portId: "out", alignment: new go.Spot(0.875, 0.5),stroke:"transparent"}),
       
         $(go.Panel,go.Panel.Position,
            $(go.TextBlock,{ 
              text: "NOT gate",
              textAlign:'left',
              position:new go.Point(-50,100),
            }
      
            )
         )

       );

       export var pfixedLowTemplate  =
       $(go.Node, "Spot", nodeStyle(),
       {fromSpot: new go.Spot(1, 0.5)},
       $(go.Shape, "Rectangle", shapeStyle(),
         { fill: "transparent" }),  // override the default fill (from shapeStyle()) to be red
       $(go.Shape, "Circle", portStyle(false),  // the only port
         { portId: "", alignment: new go.Spot(1, 0.5) }),
         $(go.Panel,go.Panel.Position,
           $(go.TextBlock,
             {
               name:"value", 
               text: "0",
               font: "bold 14pt serif",
               stroke: "black",
             position:new go.Point(0,0),
           }
     
           )
        ),
        $(go.Panel,go.Panel.Position,
          $(go.TextBlock,{ 
            text: "Fixed Low Input",
            textAlign:'left',
            position:new go.Point(-50,100),
          }
    
          )
       )
       
     );

     export var pfixedHighTemplate  =
     $(go.Node, "Spot", nodeStyle(),
       {fromSpot: new go.Spot(1, 0.5)},
     $(go.Shape, "Rectangle", shapeStyle(),
       { fill: "transparent" }),  // override the default fill (from shapeStyle()) to be red
     $(go.Shape, "Circle", portStyle(false),  // the only port
       { portId: "", alignment: new go.Spot(1, 0.5) }),
       $(go.Panel,go.Panel.Position,
         $(go.TextBlock,
           {
             name:"value", 
             text: "1",
             font: "bold 14pt serif",
             stroke: "black",
           position:new go.Point(0,0),
         }
   
         )
      ),
      $(go.Panel,go.Panel.Position,
        $(go.TextBlock,{ 
          text: "Fixed High Input",
          textAlign:'left',
          position:new go.Point(-50,100),
        }
  
        )
     )
     
   );

   export var pInputTemplate =
        $(go.Node, "Spot", nodeStyle(),
        
          $(go.Shape, "Circle", shapeStyle(),
            { fill: "transparent" }),  // override the default fill (from shapeStyle()) to be red
          $(go.Shape, "Circle", portStyle(false),  // the only port
            { portId: "", alignment: new go.Spot(1, 0.5) }),
            $(go.Panel,go.Panel.Position,
              $(go.TextBlock,
                {
                  name:"value", 
                  text: "i",
                  font: "bold 14pt serif",
                  stroke: "black",
                position:new go.Point(0,0),
              }
        
              )
           ),
           $(go.Panel,go.Panel.Position,
            $(go.TextBlock,{ 
              text: "Variable Input",
              textAlign:'left',
              position:new go.Point(-50,100),
            }
      
            )
         )
          
        );

        export var pOutputTemplate =
        $(go.Node, "Spot", nodeStyle(),
          $(go.Shape, "RoundedRectangle", shapeStyle(),
            { fill: "transparent" }),  // override the default fill (from shapeStyle()) to be green
          $(go.Shape, "Circle", portStyle(true),  // the only port
            { portId: "", alignment: new go.Spot(0, 0.5) }),
            $(go.Panel,go.Panel.Position,
              
              $(go.TextBlock,
                {
                   
                  text: "o",
                  font: "bold 14pt serif",
                  stroke: "black",
                 position:new go.Point(0,0),
              }
        
              )
           ),
            $(go.Panel,go.Panel.Position,
              
              $(go.TextBlock,
                {
                  text: "Output",
                  textAlign:'left',
                  position:new go.Point(-50,100),
              }
        
              )
           ),
        );

        export var pAndTemplate =
        $(go.Node, "Spot", nodeStyle(),
        $(go.Shape, "AndGate", shapeStyle()),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in1", alignment: new go.Spot(0, 0.3) }),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in2", alignment: new go.Spot(0, 0.7) }),
            $(go.Shape, "Circle", portStyle(false),
            { portId: "out", alignment: new go.Spot(0.9, 0.5),stroke:"transparent" }),
            $(go.Panel,go.Panel.Position,
              
              $(go.TextBlock,
                {
                  text: "AND Gate",
                  textAlign:'left',
                  position:new go.Point(-50,100),
              }
        
              )
           ),
        );

        export var PorTemplate =
        $(go.Node, "Spot", nodeStyle(),
        $(go.Shape, "OrGate", shapeStyle()),
        $(go.Shape, "Circle", portStyle(true),
            { portId: "in1", alignment: new go.Spot(0.16, 0.3) }),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in2", alignment: new go.Spot(0.16, 0.7) }),
            $(go.Shape, "Circle", portStyle(false),
            { portId: "out", alignment: new go.Spot(0.9, 0.5),stroke:"transparent" }),
            $(go.Panel,go.Panel.Position,
              
              $(go.TextBlock,
                {
                  text: "OR Gate",
                  textAlign:'left',
                  position:new go.Point(-50,100),
              }
        
              )
           ),
        );

        export var PxorTemplate =
        $(go.Node, "Spot", nodeStyle(),
          $(go.Shape, "XorGate", shapeStyle()),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in1", alignment: new go.Spot(0.26, 0.3) }),
          $(go.Shape, "CIrcle", portStyle(true),
            { portId: "in2", alignment: new go.Spot(0.26, 0.7) }),
          $(go.Shape, "Circle", portStyle(false),
            { portId: "out", alignment: new go.Spot(1, 0.5) ,stroke:"transparent",fill:"transparent"}),
            $(go.Panel,go.Panel.Position,
              
              $(go.TextBlock,
                {
                  text: "XOR Gate",
                  textAlign:'left',
                  position:new go.Point(-50,100),
              }
        
              )
           ),
        );

        

        export var PnorTemplate =
        $(go.Node, "Spot", nodeStyle(),
        $(go.Shape, "norGate", shapeStyle()),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in1", alignment: new go.Spot(0.16, 0.3) }),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in2", alignment: new go.Spot(0.16, 0.7) }),
            $(go.Shape, "Circle", portStyle(false),
            { portId: "out", alignment: new go.Spot(0.9, 0.5),stroke:"transparent" }),
            $(go.Panel,go.Panel.Position,
              
              $(go.TextBlock,
                {
                  text: "NOR Gate",
                  textAlign:'left',
                  position:new go.Point(-50,100),
              }
        
              )
           ),
        );

      export var PxnorTemplate =
        $(go.Node, "Spot", nodeStyle(),
        $(go.Shape, "XnorGate", shapeStyle()),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in1", alignment: new go.Spot(0.26, 0.3) }),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in2", alignment: new go.Spot(0.26, 0.7) }),
          $(go.Shape, "Circle", portStyle(false),
            { portId: "out", alignment: new go.Spot(0.9, 0.5),stroke:"transparent" }),
            $(go.Panel,go.Panel.Position,
              
              $(go.TextBlock,
                {
                  text: "XNOR Gate",
                  textAlign:'left',
                  position:new go.Point(-50,100),
              }
        
              )
           ),
        );

      export var PnandTemplate =
        $(go.Node, "Spot", nodeStyle(),
        $(go.Shape, "NandGate", shapeStyle()),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in1", alignment: new go.Spot(0, 0.3) }),
          $(go.Shape, "Circle", portStyle(true),
            { portId: "in2", alignment: new go.Spot(0, 0.7) }),
            $(go.Shape, "Circle", portStyle(false),
            { portId: "out", alignment: new go.Spot(0.9, 0.5),stroke:"transparent" }),
            $(go.Panel,go.Panel.Position,
              
              $(go.TextBlock,
                {
                  text: "NAND Gate",
                  textAlign:'left',
                  position:new go.Point(-50,100),
              }
        
              )
           ),
        );

    //    $(go.Panel,go.Panel.Position,
    //     $(go.TextBlock,{ 
    //       text: "NOT",
          
    //       position:new go.Point(0,100),
    //     }
  
    //     )
    //  )