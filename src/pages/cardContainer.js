import React from "react";
import Card from "./card";
import {connect} from "react-redux";
import {deleteCard, editCard, statusInput} from "../store/action/cardsAction";

function cardsSortForBoard(props) {
	switch (props.boardNum) {
		case 0: return getCardsFromBoard(props.boards.execute, props.cards, props.deleteCard, props.editCard, props.statusInput);
		case 1: return getCardsFromBoard(props.boards.doing, props.cards);
		case 2: return getCardsFromBoard(props.boards.completed, props.cards);
		default: return false;
	}
}
function getCardsFromBoard(board, cards, deleteCard, editCard, statusInput){
	let showCards = [];
	for(let i=0; i<board.length; i++){
		let boardCard = board.filter(key => key.position === i)[0];
		let cardInfo = cards.filter(key => (key !== undefined && key.id === boardCard.cardID))[0];

		if(cardInfo !== undefined) showCards.push(<Card
			key={cardInfo.id}
			cardInfo={cardInfo}
			editCard={editCard}
			deleteCard={deleteCard}
			statusInput={statusInput}
		/>);
	}
	return showCards;
}

function mapStateToProps(state) {
	return{
		cards: state.cardsTodo,
		boards:state.boardTodo
	}
}
/*function mapDispatchToProps(dispatch) {
	return {
		deleteCards: (id)=>{dispatch(deleteCard(id))}
	}
}*/

const CardContainer = connect(mapStateToProps, {deleteCard, editCard, statusInput})(cardsSortForBoard);
export default CardContainer;