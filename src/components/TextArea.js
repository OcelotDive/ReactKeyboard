import React, { Component } from 'react';
import { connect } from 'react-redux';

class TextArea extends Component {
	
	handleChange = (e) => {
		
	}
	
	render() {
		setTimeout(()=>{
		let textarea = this.refs.textarea_id;
		console.log(textarea)
		textarea.scrollTop = textarea.scrollHeight;
		
		},1000)
		
		console.log(this.props)
		return(
			<div className="typingArea">
			<form>
			<textArea className="textbox" id="textarea_id" ref="textarea_id" type="textArea" placeholder="Click to Type Text Here" readonly='true' onChange={this.handleChange} >{this.props.textString}</textArea>
			</form>
			</div>
		
		)
	}
	
}

const mapStateToProps = (state) => {
	return {
		capsOnOff: state.capsOnOff,
		textString: state.textString
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        submitSearch: (combinedArray) => {dispatch({type: 'SUBMITSEARCH', combinedArray: combinedArray})}
		
	
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TextArea);