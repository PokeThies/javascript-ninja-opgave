import { gsap } from "gsap";
import ChangeContents from "./ChangeContents";
import Menu from "./Menu";
import Card from "./CardData";

class ShowActors {
  constructor(data) {
    
    const CC = new ChangeContents();

    const menu = new Menu(CC, data);

    const card = new Card (CC, data);   
    
    

    

   /*  const cardContainer = document.createElement("section");
    cardContainer.id = "cardContainer";
    document.body.appendChild(cardContainer);

    const card = document.createElement("div");
    card.id = "card";
    cardContainer.appendChild(card);

    const childCardArray = ["headline", "imagecon", "content", "info"];
    childCardArray.forEach((elementId, index) => {
      const cardChild = document.createElement("div");
      cardChild.id = elementId;
      card.appendChild(cardChild);

      
    });*/

  /*  const showImg = document.createElement("img");
    showImg.id = "showImg";
    showImg.src = "../assets/ninja.png";
    document.querySelector("#imagecon").appendChild(showImg);

    const infochild = document.createElement("div");
    infochild.id = "infochild";
    document.querySelector("#info").appendChild(infochild);

    const strength = document.createElement("div");
    strength.id = "strength";
    document.querySelector("#infochild").appendChild(strength);

    const lives = document.createElement("div");
    lives.id = "lives";
    document.querySelector("#infochild").appendChild(lives);

    card.addEventListener("click", (e) => {

     if (CC.currentIndex > - 1)
      

      document.querySelector("#info").style.display = "block";
      gsap.to("#info", {
        duration: 0.05,
        rotate: 10,
        scale: 1.3,
        repeat: 3,
        transformOrigin: "center",
        yoyo: true,
        });

        let addInfo = data [CC.currentIndex].information;
        console.log(addInfo.strength);

        let mStrength = document.querySelector("#strength")
        mStrength.textContent = (addInfo.strength);

        let mLives = document.querySelector("#lives");
        mLives.textContent = addInfo.lives;

       

    }); */ 



    const footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer);
  }
}

export default ShowActors;
