const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "cat",
      breed: "Stray",
    }),
    React.createElement(Pet, {
      name: "Ji",
      animal: "Goat",
      breed: "Ewu",
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
