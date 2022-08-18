"use strict";

let bossNames = ["lovetown", "cryingchildren", "xiao", "yan", "blacksilence"];

let songDetails = {
  lovetown: {
    bg: "pink-400",
    border: "pink-400",
    link: "https://youtu.be/xyx8DMlUAQ4",
    title: "Lovetown",
    song: "From a Place of Love",
    genre: "PTSD",
    desc: `<p class="py-4">
    A beautiful and innocent song for the story of a couple, the
    genre of which devolves quickly from "Love" to "Lovecraftian"
    in the span of one visual novel cutscene. I still get
    nightmares about this storyline! :D
  </p>`,
    fact: `For a long while, the game wiki page for this battle
    was just the text "we don't talk about Lovetown".`,
  },

  cryingchildren: {
    bg: "gray-400",
    border: "gray-400",
    link: "https://youtu.be/lclt459JpVQ",
    title: "The Crying Children",
    song: "And Then is Heard No More",
    genre: "Cope",
    desc: `<p class="py-4">
    The Song of a maidenless soyboy who somehow runs away and
    survives like the first four times he battles you, and wishes
    he'd died each time afterwards.
  </p>`,
    fact: `This fight was the reason I had "kill more crying
    children" written in my notes.`,
  },

  xiao: {
    bg: "red-700",
    border: "red-700",
    link: "https://youtu.be/UeBQMVnmr2Y",
    title: "Xiao",
    song: "Iron Lotus",
    genre: "FIRE",
    desc: `<p class="py-4">
    Theme for a w*man who just wants to avenge her dead husband.
    If being cute was a crime, Xiao would be in jail; for twelve
    charges of manslaughter via arson.
  </p>`,
    fact: `Despite the song's theming about rage and fire this
    is the only boss that is fully sane and in control of her
    emotions during the fight.`,
  },
  yan: {
    bg: "blue-500",
    border: "blue-500",
    link: "https://youtu.be/aHUVqV5CO6w",
    title: "Distorted Yan",
    song: "Children of the City",
    genre: "JEE",
    desc: `<p class="py-4">
    Based man concludes free will doesn't exist, breaks into local
    library for shits and giggles because a piece of paper told
    him to. Truly a masterpiece of storytelling.
  </p>`,
    fact: `The line in the song "By the time you realise,
    you'll be restrained to a desk / And with your dreams on the
    floor your comply, eyes chained to the test" really resonates
    with me for some reason, not quite sure why though.`,
  },
  blacksilence: {
    bg: "black",
    border: "black",
    link: "https://youtu.be/D_qiWvjJ3kk",
    title: "The Black Silence",
    song: "Gone Angels",
    genre: "Depression",
    desc: `<img
    src="./assets/Music/trolldespair.png"
    class="py-4 h-40 self-center justify-center"
  />`,
    fact: `There's a lore reason for why the only instrument in
    the song is a piano.`,
  },
};

function loadHandler() {
  for (let bossName of bossNames) {
    let newSongElement = document.createElement("div");
    newSongElement.innerHTML = `<!-- ${bossName} -->
    <div class="py-8">
      <h3 class="font-bold text-3xl py-2" id="${bossName}title">${songDetails[bossName].title}</h3>
      <audio
        src="./assets/Music/${bossName}.mp3"
        preload="auto"
        controls
        loop
        class="my-4"
        onplay="PlayHandler(event)"
        onpause="PauseHandler(event)"
        id="${bossName}"
      ></audio>
      <div
        class="flex p-2 bg-${songDetails[bossName].bg} rounded-lg bg-opacity-0 border-${songDetails[bossName].border} border-2 border-opacity-0 transition-all duration-500"
        id="${bossName}desc"
      >
        <a
          href="${songDetails[bossName].link}"
          target="_blank"
          class="flex-none"
        >
          <img src="./assets/Music/BattleIcons/${bossName}.png" class="h-52"
        /></a>
        <div class="pl-4 self-center">
          <div class="flex justify-center text-2xl">
            <p class="px-12">
              <strong>Song Name</strong>: ${songDetails[bossName].song}
            </p>
            <p class="px-12"><strong>Genre</strong>: ${songDetails[bossName].genre}</p>
          </div>
          ${songDetails[bossName].desc}
          <p>
            Fun fact: ${songDetails[bossName].fact}
          </p>
        </div>
      </div>
    </div>`;
    document.getElementById("songs").append(newSongElement);
  }
}
