// const heading1 = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello World from React !"
// );

// console.log(heading1);  // returns an object

/**
 *
 *
 * <div id="parent">
 *    <div id="child">
 *       <h1>I'm the h1 tag</h1>
 *       <h2>I'm the h1 tag</h2>
 *    </div>
 * <div id="child2">
 *       <h1>I'm the h1 tag</h1>
 *       <h2>I'm the h1 tag</h2>
 *    </div>
 * </div>
 *
 * ReactElement(object) => converts to HTML(browser understands)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm the h1 tag "),
    React.createElement("h2", {}, "I'm the h2 tag "),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm the h1 tag "),
    React.createElement("h2", {}, "I'm the h2 tag "),
  ]),
]);

console.log(parent);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(parent);
