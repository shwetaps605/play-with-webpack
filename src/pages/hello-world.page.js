import { Header } from "../components/header/header"
import HelloWorldButton  from "../components/hello-world-button/hello-world-button"
import _ from "lodash"

const header = new Header();
header.render(_.upperFirst("hello world"));

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
