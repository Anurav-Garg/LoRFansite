"use strict";

function FormHandler() {
  let selection = document.forms[0].elements.masochism;
  // alert(selection);
  contents.remove();
  if (selection.value == "no") {
    let newContents = document.createElement("div");
    newContents.innerHTML = `<div>
      <h2 class="text-4xl text-yellow-400 py-4">Your Results</h2>
      <div class="flex">
        <p class="py-4 basis-2/3">
          Don't care + didn't ask + L + Ratio + soyjak + beta + cringe + stfu +
          cope + seethe + ok boomer + incel + virgin + Karen + 🤡🤡🤡 + you are
          not just a clown, you are the entire circus + 💅💅💅 + nah this ain't
          it + do better + check your privilege + pronouns in bio + anime pfp +
          🤢🤢🤮🤮 + the cognitive dissonance is real with this one + small dick
          energy + 😂😂🤣🤣 + lol copium + snowflake + 🚩🚩🚩 + those tears
          taste delicious + Lisa Simpson meme template saying that your opinion
          is wrong + 😒🙄🧐🤨 + wojak meme in which I'm the chad + average your
          opinion fan vs average my opinion enjoyer + random k-pop fancam + cry
          more + how's your wife's boyfriend doing + Cheetos breath +
          Intelligence 0 + r/whooooosh + r/downvotedtooblivion + blocked and
          reported + yo Momma so fat + I fucked your mom last night + what zero
          pussy does to a mf + Jesse what the fuck are you talking about + holy
          shit go touch some grass + cry about it + get triggered
        </p>
        <figure class="basis-1/3 pl-16">
          <img
            src="./assets/Spritesheets/rolandCringeCroppedCropped.png"
            class="w-64 object-fill pl-4"
          />
          <figcaption class="text-sm">Fig 7.3: Roland, cringing at you for being sane</figcaption>
        </figure>
      </div>
    </div>`;
    title.append(newContents);
  } else {
    let newContents = document.createElement("div");
    newContents.innerHTML = `<div>
    <h2 class="text-4xl text-yellow-400 py-4">Your Results</h2>
    <h3 class="text-3xl py-4">Please Seek Help.</h3>
    <a
      href="https://www.google.com/search?q=Therapists+near+me"
      class="text-blue-600 underline text-md"
      target="_blank"
    >
      Therapists near you
    </a>
    <br />
    <a
      href="https://www.google.com/search?q=Suicide+helpline"
      class="text-blue-600 underline text-md"
      target="_blank"
    >
      Suicide Helpline
    </a>

    <p>
      <br /><br />.<br /><br />.<br /><br />.<br /><br />.<br /><br />
      ...buuut, before that, while you're still mentally ill, why not make the
      most of it and play an amazing game?
    </p>
    <a href="https://store.steampowered.com/app/1256670/Library_Of_Ruina/" target="_blank">
      <img src="./assets/OtherImages/angelaInviting.png" class="absolute w-[75%] -z-10 peer" />
      <img src="./assets/OtherImages/angelaInvitingShining.png" class="absolute w-[75%] invisible hover:visible peer-hover:visible" />
    </a>
  </div>`;
    title.append(newContents);
  }
}
