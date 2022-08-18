"use strict";

let playing = "";

function PlayHandler(event) {
  if (playing) {
    let oldAudioNode = document.getElementById(playing);
    oldAudioNode.pause(); // Calls PauseHandler() on its own
  }
  setTimeout(function () {
    PlayingStyler(event.target.getAttribute("id"));
  });
}

function PauseHandler() {
  document.getElementById(playing).setAttribute("class", "py-4");
  document
    .getElementById(`${playing}title`)
    .setAttribute("class", "font-bold text-3xl py-2");
  document
    .getElementById(`${playing}desc`)
    .classList.remove("bg-opacity-40", "backdrop-blur");
  document
    .getElementById(`${playing}desc`)
    .classList.add("bg-opacity-0", "border-opacity-0");

  document.body.firstElementChild.classList.remove("bg-opacity-0");

  playing = "";
  return;
}

function PlayingStyler(targetNodeName) {
  if (
    document.getElementById(targetNodeName).getAttribute("id") === "lovetown"
  ) {
    document
      .getElementById(targetNodeName)
      .setAttribute("class", "bg-pink-300 my-4");
    document
      .getElementById("lovetowntitle")
      .setAttribute("class", "font-bold text-3xl py-2 text-pink-600");
    document
      .getElementById("lovetowndesc")
      .classList.remove("bg-opacity-0", "border-opacity-0");
    document
      .getElementById("lovetowndesc")
      .classList.add("bg-opacity-40", "backdrop-blur");
    let oldBg = String(document.body.classList[0]);
    document.body.classList.replace(
      oldBg,
      `bg-[url('./assets/Music/Backgrounds/lovetown.png')]`
    );
    document.body.firstElementChild.classList.add("bg-opacity-0");
    playing = "lovetown";
    return;
  }

  if (
    document.getElementById(targetNodeName).getAttribute("id") ===
    "cryingchildren"
  ) {
    document
      .getElementById(targetNodeName)
      .setAttribute("class", "bg-gray-300 my-4");
    document
      .getElementById("cryingchildrentitle")
      .setAttribute("class", "font-bold text-3xl py-2 text-gray-300");
    document
      .getElementById("cryingchildrendesc")
      .classList.remove("bg-opacity-0", "border-opacity-0");
    document
      .getElementById("cryingchildrendesc")
      .classList.add("bg-opacity-40", "backdrop-blur");
    let oldBg = String(document.body.classList[0]);
    document.body.classList.replace(
      oldBg,
      `bg-[url('./assets/Music/Backgrounds/cryingchildren.png')]`
    );
    document.body.firstElementChild.classList.add("bg-opacity-0");
    playing = "cryingchildren";
    return;
  }

  if (document.getElementById(targetNodeName).getAttribute("id") === "xiao") {
    document
      .getElementById(targetNodeName)
      .setAttribute("class", "bg-red-600 my-4");
    document
      .getElementById("xiaotitle")
      .setAttribute("class", "font-bold text-3xl py-2 text-red-500");
    document
      .getElementById("xiaodesc")
      .classList.remove("bg-opacity-0", "border-opacity-0");
    document
      .getElementById("xiaodesc")
      .classList.add("bg-opacity-40", "backdrop-blur");
    let oldBg = String(document.body.classList[0]);
    document.body.classList.replace(
      oldBg,
      `bg-[url('./assets/Music/Backgrounds/xiao.png')]`
    );
    document.body.firstElementChild.classList.add("bg-opacity-0");
    playing = "xiao";
    return;
  }

  if (document.getElementById(targetNodeName).getAttribute("id") === "yan") {
    document
      .getElementById(targetNodeName)
      .setAttribute("class", "bg-blue-400 my-4");
    document
      .getElementById("yantitle")
      .setAttribute("class", "font-bold text-3xl py-2 text-blue-300");
    document
      .getElementById("yandesc")
      .classList.remove("bg-opacity-0", "border-opacity-0");
    document
      .getElementById("yandesc")
      .classList.add("bg-opacity-40", "backdrop-blur");
    let oldBg = String(document.body.classList[0]);
    document.body.classList.replace(
      oldBg,
      `bg-[url('./assets/Music/Backgrounds/yan.png')]`
    );
    document.body.firstElementChild.classList.add("bg-opacity-0");
    playing = "yan";
    return;
  }

  if (
    document.getElementById(targetNodeName).getAttribute("id") ===
    "blacksilence"
  ) {
    document
      .getElementById(targetNodeName)
      .setAttribute("class", "bg-black my-4");
    document
      .getElementById("blacksilencetitle")
      .setAttribute("class", "font-bold text-3xl py-2 text-white");
    document
      .getElementById("blacksilencedesc")
      .classList.remove("bg-opacity-0", "border-opacity-0");
    document
      .getElementById("blacksilencedesc")
      .classList.add("bg-opacity-40", "backdrop-blur");
    let oldBg = String(document.body.classList[0]);
    document.body.classList.replace(
      oldBg,
      `bg-[url('./assets/Music/Backgrounds/blacksilence.png')]`
    );
    document.body.firstElementChild.classList.add("bg-opacity-0");
    playing = "blacksilence";
    return;
  }
}

function FormHandler() {
  let formElements = document.forms[0].elements;

  if (
    document.getElementById("coords").classList.contains("hidden") &&
    formElements.hitlist.value === "no"
  ) {
    FormChangeHandler();
    return;
  }

  if (formElements.hitlist.value === "no") {
    if (
      formElements.latitude.value === "" ||
      isNaN(formElements.latitude.value) ||
      formElements.latitude.value < -90 ||
      formElements.latitude.value > 90
    ) {
      alert("Please enter a Latitude value between -90 and 90");
      return;
    }
    if (
      formElements.longitude.value === "" ||
      isNaN(formElements.longitude.value) ||
      formElements.longitude.value < -180 ||
      formElements.longitude.value > 180
    ) {
      alert("Please enter a Longitude value between -180 and 180");
      return;
    }
    opinion.innerHTML = `<h3 class="text-3xl py-4">Your Thoughts: Survey</h3>
    Thank you for your feedback! We will get back to you at your physical location in 3-5 business days 😇`;
    opinion.setAttribute("class", "pt-16 pb-96");
    return;
  }

  if (formElements.hitlist.value === "yes") {
    opinion.innerHTML = `<h3 class="text-3xl py-4">Your Thoughts: Survey</h3>
    +50 Social Credit`;
    opinion.setAttribute("class", "pt-16 pb-96");
  }
}

function FormChangeHandler() {
  if (document.forms[0].elements.hitlist.value == "no") {
    document.getElementById("coords").classList.remove("hidden");
    return;
  } else {
    document.getElementById("coords").classList.add("hidden");
  }
}
