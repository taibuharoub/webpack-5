// import helloWorld form "./hello-world.js" //for this will need to specify a loader
// const helloWorld = require("./hello-world");
import HelloWorldButton from "./components/hello-world-button/hello-world-bitton";
import addImage from "./add-image"
import Heading from "./components/heading/heading"
// import _ from "lodash"
import React from "react"

const heading = new Heading();
// heading.render(_.upperFirst("hello world"));
heading.render("hello world");

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()
// addImage();

//check NODE_ENV variable

if (process.env.NODE_ENV === "production") {
    console.log("Production Mode");
} else if (process.env.NODE_ENV === "development") {
    console.log("Development Mode");
}

// helloWorldButton.methodThatDoesNotExist();