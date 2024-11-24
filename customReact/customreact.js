const mainContainer = document.getElementById("root");

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Google link",
};

function customRender(reactElement, mainContainer) {
  // HC way
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   Object.keys(reactElement.props).forEach((key) =>
  //     domElement.setAttribute(key, reactElement.props[key])
  //   );
  //   mainContainer.appendChild(domElement);

  // my way
  let propsString = "";
  Object.keys(reactElement.props).forEach(
    (key) => (propsString += `${key}=${reactElement.props[key]} `)
  );
  mainContainer.innerHTML = `<${reactElement.type} ${propsString}>${reactElement.children}</${reactElement.type}>`;
}

customRender(reactElement, mainContainer);
