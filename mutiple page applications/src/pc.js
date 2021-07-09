import Heading from "./components/heading/heading";
import PcImage from "./components/pc-image/pc-image";
import _ from "lodash"

const heading = new Heading();
heading.render(_.upperFirst("pc"));
const pcImage = new PcImage();
pcImage.render();
