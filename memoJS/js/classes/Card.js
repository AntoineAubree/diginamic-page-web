import CoopDom from "./CoopDom.js";
import FormAddCard from "./FormAddCard.js";
export default class Card extends CoopDom {
    constructor(question, answer, column) {
        super();
        this.question = question;
        this.answer = answer;
        this.column = column;

        // construction du dom de la carte
        this.domElements = this.render();

        // gestion des événements
        this.handleEvents();

    }
    handleEvents = () => {
        // affichage de la réponse au click sur la question
        this.domElements.question.onclick = () => {
            if (this.domElements.answer.hidden) this.domElements.answer.hidden = false;
            else this.domElements.answer.hidden = true;
        }

        // suppression d'une carte
        this.domElements.button_remove.onclick = () => {
            this.column.removeCard(this);
        }

        // affichage du formulaire au click sur le bouton modifier
        this.domElements.button_edit.onclick = () => {
            new FormAddCard(this.column, this);
        }

    }
    render = () => {
        console.log("Dans la fonction render de Card");
        // Création  des éléments du DOM grâce à la méthode createAddDomElt héritée de CoopDom
        const article = this.createAddDomElt(
            "article",
            "",
            this.column.domElements.section_cards,
            { "class": "text-light bg-dark rounded p-4 mt-2 mb-2" }
        );
        const btnRight = this.createAddDomElt(
            "button",
            "<",
            article
        )
        const question = this.createAddDomElt(
            "h4",
            this.question,
            article
        );
        const btnLeft = this.createAddDomElt(
            "button",
            ">",
            article
        )
        const answer = this.createAddDomElt(
            "p",
            this.answer,
            article
        );

        // création des boutons
        const button_remove = this.createAddDomElt(
            "button",
            "Supprimer la carte",
            article,
            { "class": "btn btn-danger mr-2 mb-2 w-100" }
        );

        /**
         * Créer un bouton qui va afficher au click un formulaire
         * qui permettra de modifier la carte (la question et/ou la réponse )
         */
        const button_edit = this.createAddDomElt(
            "button",
            "Modifier la carte",
            article,
            { "class": "btn btn-warning mr-2 w-100", "data-toggle": "modal", "data-target": "#formModal" }
        );

        // On cache la réponse
        answer.hidden = true;

        return {
            "article": article,
            "question": question,
            "answer": answer,
            "button_remove": button_remove,
            "button_edit": button_edit,
        };

    }
}