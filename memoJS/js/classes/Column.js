import Card from "./Card.js";
import CoopDom from "./CoopDom.js";
import FormAddCard from "./FormAddCard.js";

export default class Column extends CoopDom {
    constructor(title, cards) {
        super();
        this.title = title;
        this.cards = cards;

        // Appel de la méthode qui va afficher la colonne
        this.domElements = this.render();

        // Gestion des événements
        this.domElements.button.onclick = () => {
            this.addCard();
        };

        for (const card of this.cards) {
            new Card(card.question, card.reponse, this);
        }

    }
    addCard = () => {
        new FormAddCard(this); // this représente l'instance de la colonne
    }
    removeCard = (card) => {
        card.domElements.article.remove();// supprime l'élément du dom article de la carte
    }
    render = () => {
        // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const section = this.createAddDomElt("section", "", document.querySelector("#board"), { "class": "column col-3" });
        const title = this.createAddDomElt("h3", this.title, section);
        const button = this.createAddDomElt("button", "Ajouter une carte", section, { "class": "btn btn-success", "data-toggle": "modal", "data-target": "#formModal" });
        const section_cards = this.createAddDomElt("section", "", section, { "class": "cards" });

        return {
            "section": section,
            "title": title,
            "button": button,
            "section_cards": section_cards
        };
    }
}