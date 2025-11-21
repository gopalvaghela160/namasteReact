/**
 *
 * <div id="parent">
 *      <div id="child">
 *         <h1 id="main-heading" class="header">hello world from react!</h1>
 *         <h1 id="main-heading" class="header">hello world from react!</h1>
 *    </div>
 * </div>
 */

const heading = React.createElement(
  "h1",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "hello world from react !"),
    React.createElement("h1", {}, "hello world from react !")]
  )
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
