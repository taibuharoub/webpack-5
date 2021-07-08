// import helloWorld form "./hello-world.js" //for this will need to specify a loader
// const helloWorld = require("./hello-world");
import HelloWorldButton from "./components/hello-world-button/hello-world-bitton";
import addImage from "./add-image"
import Heading from "./components/heading/heading"

const heading = new Heading();
heading.render();

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()
// addImage();
