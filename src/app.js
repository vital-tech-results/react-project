const Pet = props => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ])
}

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {name: "Tucker", animal:"Dog", breed: "Mutt"}),
        React.createElement(Pet, {name: "Dash", animal:"Dog", breed: "Mutt"}),
        React.createElement(Pet, {name: "Tootles", animal:"Cat", breed: "Tabby"}),
        React.createElement(Pet, {name: "Freddy", animal:"Frog", breed: "American Bullfrog"})
    ])
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))
