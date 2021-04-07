import React from "react";
import '../App.css';

function Card(props) {
	return<div className={"card_todo"}>
		<span>{props.cardInfo.id}</span>
		{props.cardInfo.edit
			? <input onBlur={()=>{props.statusInput(props.cardInfo.id)}}
			         type={"text"}
			         onChange={(e)=>{props.editCard(e.target.value, props.cardInfo.id)}}
			         value={props.cardInfo.text}
			         autoFocus={true}/>
			: <p onClick={()=>{props.statusInput(props.cardInfo.id)}} >{props.cardInfo.text}</p> }
		<div className={"submit_place"}>
			<input type={"submit"} onClick={()=>{console.log("Сделать")}} value={"Сделать"} />
			<input type={"submit"} onClick={()=>{props.editStatus(props.cardInfo.id, props.boardID, 1)}} value={"Выполняю"} />
			<input type={"submit"} onClick={()=>{console.log("Готово")}} value={"Готово"} />
			<input type={"submit"} onClick={()=>{props.deleteCardFromBoard(
				props.cardInfo.id,
				props.deleteCard,
				props.boardID,
				props.deleteCardBoard
			)}} value={"X"} />
			<input type={"submit"} onClick={()=>{props.editPosition(props.cardInfo.id, props.boardID, true)}} value={"△"} />
			<input type={"submit"} onClick={()=>{props.editPosition(props.cardInfo.id, props.boardID, false)}} value={"▽"} />
		</div>
	</div>
}

export default Card;