var Demos = (function() {
  var examples;
  var baseUrl = window.location.href;
  var iframe;

  examples = [
    { name: "1.1-basics",
      description: "rectangle",
      instructions: ""},
    { name: "1.2-color",
      description: "colored shapes",
      instructions: ""},
    { name: "2.1-variables",
      description: "basic drawing app",
      instructions: "move mouse to draw. click mouse to clear canvas."},
    { name: "2.2-variables",
      description: "moving ball",
      instructions: ""},
    { name: "2.3-objects",
      description: "moving ball",
      instructions: ""},
    { name: "2.4-map",
      description: "background changing color",
      instructions: "move mouse horizontally"},
    { name: "2.5-random",
      description: "circles appear in random spots",
      instructions: ""},
    { name: "3.1-conditionals",
      description: "ball changes color",
      instructions: "move mouse to right half of canvas"},
    { name: "3.2-bouncing-ball",
      description: "ball bounces between left and right edges",
      instructions: ""},
    { name: "3.3-else",
      description: "show different shapes based on mouse position",
      instructions: "move mouse horizontally"},
    { name: "3.4-boolean",
      description: "square and background changes color",
      instructions: "move mouse inside square to change square color; click inside square to change background"},
    { name: "3.4-boolean-button",
      description: "square and background changes color",
      instructions: "move mouse inside square to change square color; click inside square to toggle background"},
    { name: "4.1-while-for",
      description: "two rows of circles",
      instructions: ""},
    { name: "4.2-nested-loops",
      description: "moving row of circles",
      instructions: ""},
    { name: "4-2-nested-for-loops",
      description: "grid of colored circles",
      instructions: "move mouse horizontally"},
    { name: "5.1-functions",
      description: "ball bouncing off 4 edges",
      instructions: ""},
    { name: "5.2-function-parameters",
      description: "two lollipops",
      instructions: ""},
    { name: "5.3-function-return",
      description: "console log results of function",
      instructions: "look at console"},
    { name: "5.4-functions-inside-objects",
      description: "moving circle",
      instructions: ""},
    { name: "6.1-array",
      description: "show ellipse and text",
      instructions: "click canvas to change text"},
    { name: "6.2-arrays-loops",
      description: "show 4 circles",
      instructions: ""},
    { name: "6.3-arrays-of-objects",
      description: "show randomly placed circles",
      instructions: ""},
    { name: "6.4-constructor-function",
      description: "show randomly placed circles",
      instructions: ""},
    { name: "6.5-editing-objects",
      description: "draw some circles",
      instructions: "click and drag mouse"},
    { name: "6.6-multiple-files",
      description: "show randomly placed circles",
      instructions: ""},
    { name: "6.7-clicking-on-objects",
      description: "change color of randomly placed circles",
      instructions: "click on circles to change color"},
    { name: "6.8-delete-objects",
      description: "add x numbers of circles to canvas",
      instructions: "click to draw circle"},
    { name: "6.9-object-intersection",
      description: "",
      instructions: ""},
    { name: "6.10-object-intersection-array",
      description: "when circles touch, they change color",
      instructions: ""},
    { name: "6.11-images",
      description: "add images to canvas",
      instructions: "click to add image to canvas"},
    { name: "7.2-create-html-elements",
      description: "create dom element ",
      instructions: ""},
    { name: "7.3-manipulating-dom-elements",
      description: "create dom element",
      instructions: "click to show random number"},
    { name: "7.4-handling-dom-events-with-callbacks",
      description: "change color of canvas by clicking button",
      instructions: "click on button"},
    { name: "7.5-other-events-and-inputs",
      description: "change size of circle, text, background color",
      instructions: "move slider to change circle size; type text and hit enter to change text; hover over text to change; click on button to change background color"},
    { name: "7.6-css",
      description: "apply css to paragraphs",
      instructions: "hover over 'some text'; click button"},
    { name: "7.7-events-changed-and-inputs",
      description: "change text and font size",
      instructions: "move slider to change font size; type text and hit enter in first box to change text; type text in second box to change text"},
    { name: "7.9-select-selectAll",
      description: "show text and change background color",
      instructions: "click button to change background color"},
    { name: "7.10-callbacks-multiple-DOM-elements",
      description: "",
      instructions: "hover over 'rainbow' to change color"},
    { name: "7.11-parent-child",
      description: "make canvas a child of particular paragraph",
      instructions: ""},
    { name: "7.11-parent-child-list",
      description: "make li a child of ol",
      instructions: "click button to create li"}
  ];

  // plain js functions

  function createLink (exampleName) {
    return "<a href='#'>" + exampleName + "</a>";
  }

  function createIndexUrl(exampleName) {
    return baseUrl + exampleName + '/index.html';
  }

  function createSourceUrl(exampleName) {
    return  baseUrl + exampleName + '/sketch.js';
  }

  function findExample(text) {
    return examples.filter(function(example) {
      return example.name == text;
    })[0];
  };

  return {
    createLink: createLink,
    createIndexUrl: createIndexUrl,
    createSourceUrl: createSourceUrl,
    examples: examples,
    findExample: findExample
  }
}());
