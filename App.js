import React from "react"
import ReactDOM from "react-dom";
const parent = React.createElement("div", {id: "parent"},[
React.createElement("div", {id:"child1"},
React.createElement("h1", {id:"heading"}, "I'm an H1 tag")
),

React.createElement("div", {id: "child2"},
React.createElement("h1", {id: "heading"}, "I'm a new h1 in child 2")
),
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);