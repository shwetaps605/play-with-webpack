import helloWorld from "./test"
import addImage from "./add-image"
import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Header from "./components/header/header";


//helloWorld();

//addImage();

const header = new Header();
header.render();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();