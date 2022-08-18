"use strict";

function HoverHandler(event) {
  if (event.target.closest(`#bspic`) || event.target.closest(`#bsdesc`)) {
    document.body.setAttribute(
      "class",
      "bg-[url('./assets/Abnos/blueStarBackground.png')] bg-fixed bg-top bg-cover"
    );
    document.body.firstElementChild.classList.replace(
      "bg-gray-800",
      "bg-gray-800/0"
    );
    return;
  }
  if (event.target.closest(`#bhpic`) || event.target.closest(`#bhdesc`)) {
    document.body.setAttribute(
      "class",
      "bg-[url('./assets/Abnos/burrowingHeavenBackground.png')] bg-fixed bg-top bg-cover backdrop-brightness-50"
    );
    document.body.firstElementChild.classList.replace(
      "bg-gray-800",
      "bg-gray-800/0"
    );
    return;
  }
  if (event.target.closest(`#dfpic`) || event.target.closest(`#dfdesc`)) {
    document.body.setAttribute(
      "class",
      "bg-[url('./assets/Abnos/derFreischutzBackground.png')] bg-fixed bg-top bg-cover backdrop-brightness-75"
    );
    document.body.firstElementChild.classList.replace(
      "bg-gray-800",
      "bg-gray-800/0"
    );
    return;
  }
  if (event.target.closest(`#wnpic`) || event.target.closest(`#wndesc`)) {
    document.body.setAttribute(
      "class",
      "bg-[url('./assets/Abnos/whitenightBackground.png')] bg-fixed bg-top bg-cover backdrop-brightness-75"
    );
    document.body.firstElementChild.classList.replace(
      "bg-gray-800",
      "bg-gray-800/0"
    );
    return;
  }
  if (event.target.closest(`#pbpic`) || event.target.closest(`#pbdesc`)) {
    document.body.setAttribute(
      "class",
      "bg-[url('./assets/Abnos/punishingBirdBackground.png')] bg-fixed bg-top bg-cover backdrop-brightness-50"
    );
    document.body.firstElementChild.classList.replace(
      "bg-gray-800",
      "bg-gray-800/0"
    );
    return;
  }
  document.body.firstElementChild.classList.replace(
    "bg-gray-800/0",
    "bg-gray-800"
  );
  return;
}
