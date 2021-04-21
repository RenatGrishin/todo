import React from "react";
import '../App.css';

function Card(props) {
	return<div className={"card_todo"}>
		<div className={"text"}>
			{props.cardInfo.edit
				? <textarea onBlur={()=>{props.statusInput(props.cardInfo.id)}}
				         type={"textarea"}
				         onChange={(e)=>{props.editCard(e.target.value, props.cardInfo.id)}}
				         value={props.cardInfo.text}
				            autoFocus={true}></textarea>
				: <p onClick={()=>{props.statusInput(props.cardInfo.id)}} >{props.cardInfo.text}</p> }
		</div>
		<div className={"arrows"}>
			<input type={"submit"} onClick={()=>{props.editPosition(props.cardInfo.id, props.boardID, true)}} value={"△"} />
			<input type={"submit"} onClick={()=>{props.editPosition(props.cardInfo.id, props.boardID, false)}} value={"▽"} />
		</div>
		<div className={"submit_place"}>
			<input type={"submit"} disabled={props.boardID===0 ? true : false} onClick={()=>{props.editStatus(props.cardInfo.id, props.boardID, 0)}} value={"Сделать"} />
			<input type={"submit"} disabled={props.boardID===1 ? true : false} onClick={()=>{props.editStatus(props.cardInfo.id, props.boardID, 1)}} value={"Выполняю"} />
			<input type={"submit"} disabled={props.boardID===2 ? true : false} onClick={()=>{props.editStatus(props.cardInfo.id, props.boardID, 2)}} value={"Готово"} />
		</div>
		<div className={"delete"}>
			<input type={"submit"} onClick={()=>{props.deleteCardFromBoard(
				props.cardInfo.id,
				props.deleteCard,
				props.boardID,
				props.deleteCardBoard
			)}} value={"X"} />
		</div>
	</div>
}

export default Card;