import ShowActors from "./ShowActors";
import "../css/style.scss";
import data from "../assets/json/data.json";

(() => {
  new ShowActors(data.content);
})();
