import React from "react";
import {connect} from "react-redux";
import AddCard from "./addCard";
import {addCard, createDraft, deleteDraft, editDraft} from "../store/action/cardsAction";
import {addNewCardToBoard} from "../store/action/boardAction";

function addCards(props) {
	return <AddCard
		draft={props.draft}
		addCard={props.addCard}
		createDraft={props.createDraft}
		deleteDraft={props.deleteDraft}
		editDraft={props.editDraft}
		addNewCardToBoard={props.addNewCardToBoard}
		validationText={validationText}
	/>
}

function validationText (status, value, createDraft, addCard, addNewCardToBoard, deleteDraft, id) {
	if (status) {
		createDraft();
		return true;
	}
	value = value.trim();
	if(!value){
		return false
	}
	addCard();
	addNewCardToBoard(id);
	deleteDraft();
}

function mapStateToProps(state) {
	return{
		draft: state.cardsTodo.draftCard
	}
}

let AddCardContainer = connect(mapStateToProps,
	{addCard, createDraft, deleteDraft, editDraft, addNewCardToBoard})(addCards);

export default AddCardContainer;