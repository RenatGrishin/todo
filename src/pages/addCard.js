import React from "react";
import '../App.css';

class AddCard extends  React.Component{
	state = {
		add: false
	};

	updateAddStatus(status, value=''){
		this.setState({add: status});
		this.props.validationText(status, value, this.props.createDraft, this.props.addCard, this.props.addNewCardToBoard,
			this.props.deleteDraft, this.props.draft.id);
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
					       onBlur={(e)=>{this.updateAddStatus(false, e.target.value)}}
					/>
				</div>
			}
		</div>
	}
}

export default AddCard;