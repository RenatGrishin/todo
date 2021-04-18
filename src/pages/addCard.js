import React from "react";
import '../App.css';

class AddCard extends  React.Component{
	state = {
		add: false
	};

	updateAddStatus(status){
		this.setState({add: status});
		if (status) {
			this.props.createDraft();
		}else{
			this.props.addCard();
			this.props.addNewCardToBoard(this.props.draft.id)
			this.props.deleteDraft();
		}
	}

	render() {
		return<div>
			{!this.state.add
				? <div onClick={()=>{
					this.updateAddStatus(true);
				}} className={"addCardBTN"}>
					<span>Добавить задание</span>
				</div>
				: <div>
					<input type={"text"}
					       className={"inputNewCard"}
					       onChange={(e)=>{this.props.editDraft(e.target.value)}}
					       autoFocus={true}
					       value={this.props.draft.text}
					       onBlur={()=>{this.updateAddStatus(false)}}
					/>
				</div>
			}
		</div>
	}
}

export default AddCard;