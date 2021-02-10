import Card from "./Card.js";
import CoopDom from "./CoopDom.js";

export default class FormAddCard extends CoopDom {
    constructor(column, card) {
        super();
        this.column = column;
        this.card = card

        const formEdit = document.querySelector("#form-edit");

        if (this.card) {
            formEdit.question.value = this.card.domElements.question.textContent;
            formEdit.answer.value = this.card.domElements.answer.textContent;
        } else {
            formEdit.question.value = '';
            formEdit.answer.value = '';
        }

        formEdit.onsubmit = (event) => {
            event.preventDefault();
            if (this.card) {
                this.card.domElements.question.textContent = formEdit.question.value;
                this.card.domElements.answer.textContent = formEdit.answer.value;
                
            } else {
                new Card(formEdit.question.value, formEdit.answer.value, this.column);
            }
        }
    }
}