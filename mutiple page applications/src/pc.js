import Heading from "./components/heading/heading";
import PcImage from "./components/pc-image/pc-image";
// import _ from "lodash"
import React from "react"

const heading = new Heading();
// heading.render(_.upperFirst("pc"));
heading.render("pc");
const pcImage = new PcImage();
pcImage.render();
