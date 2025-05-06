import Tabs from "./components/tabs";
import "./App.css";

const data = [
  {
    id: 1,
    title: "HTML",
    content: "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!",
  },
  {
    id: 2,
    title: "CSS",
    content: "CSS is a language that describes the style of an HTML document. CSS describes how HTML elements should be displayed. This tutorial will teach you CSS from basic to advanced.",
  },
  {
    id: 3,
    title: "JavaScript",
    content: "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.",
  },
];

function App() {
  return (
    <div className="wrapper">
      <button>A focusable element</button>
      <Tabs data={data} />
      <button>Some other focusable element</button>
    </div>
  )
}

export default App
