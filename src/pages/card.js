import React from "react";
import '../App.css';

function Card(props) {
	console.log(props)
	return<div className={"card_todo"}>
		<p>{props.cardInfo.text}</p>
		<div className={"submit_place"}>
			<input type={"submit"} onClick={()=>{console.log("Сделать")}} value={"Сделать"} />
			<input type={"submit"} onClick={()=>{console.log("Выполняю")}} value={"Выполняю"} />
			<input type={"submit"} onClick={()=>{console.log("Готово")}} value={"Готово"} />
			<input type={"submit"} onClick={()=>{props.deleteCard(props.cardInfo.id)}} value={"X"} />
		</div>
	</div>
}

export default Card;