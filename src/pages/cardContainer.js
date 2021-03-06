import React from "react";
import Card from "./card";
import {connect} from "react-redux";
import {deleteCard, editCard, statusInput, addCard} from "../store/action/cardsAction";
import {deleteCardBoard, editPosition, editStatus} from "../store/action/boardAction";

function cardsSortForBoard(props) {
	switch (props.boardNum) {
		case 0: return getCardsFromBoard(props.boardNum, props.boards.execute, props.cards, props.deleteCard,
			props.editCard, props.statusInput, props.deleteCardBoard, props.editStatus, props.editPosition, props.addCard );
		case 1: return getCardsFromBoard(props.boardNum, props.boards.doing, props.cards, props.deleteCard,
			props.editCard, props.statusInput, props.deleteCardBoard, props.editStatus, props.editPosition, props.addCard );
		case 2: return getCardsFromBoard(props.boardNum, props.boards.completed, props.cards, props.deleteCard,
			props.editCard, props.statusInput, props.deleteCardBoard, props.editStatus, props.editPosition, props.addCard );
		default: return false;
	}
}
function getCardsFromBoard(boardID, board, cards, deleteCard, editCard, statusInput, deleteCardBoard, editStatus, editPosition, addCard){
	let showCards = [];
	for(let i=0; i<board.length; i++){
		let boardCard = board.filter(key => key.position === i)[0];
		if(!boardCard) return <div>1</div>
		let cardInfo = cards.filter(key => (key !== undefined && key.id === boardCard.cardID))[0];

		if(cardInfo !== undefined) showCards.push(<Card
			key={cardInfo.id}
			boardID={boardID}
			cardInfo={cardInfo}
			editCard={editCard}
			deleteCard={deleteCard}
			statusInput={statusInput}
			deleteCardBoard={deleteCardBoard}
			deleteCardFromBoard={deleteCardFromBoard}
			editStatus={editStatus}
			editPosition={editPosition}
			addCard={addCard}
		/>);
	}
	return showCards;
}

function deleteCardFromBoard(cardID, delCard, boardID, delBoard) {
	delCard(cardID);
	delBoard(cardID, boardID);
}

function mapStateToProps(state) {
	return{
		cards: state.cardsTodo.cards,
		boards:state.boardTodo
	}
}

const CardContainer = connect(mapStateToProps, {deleteCard, editCard, statusInput,
	deleteCardBoard, editStatus, editPosition, addCard})(cardsSortForBoard);
export default CardContainer;