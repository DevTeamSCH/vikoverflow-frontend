import Router from "next/router";

export default function redirectTo(destination, res) {
  if (res) {
    res.writeHead(302, { Location: destination });
    res.end();
  } else {
    if (destination[0] === "/" && destination[1] !== "/") {
      Router.push(destination);
    } else {
      window.location = destination;
    }
  }
}
