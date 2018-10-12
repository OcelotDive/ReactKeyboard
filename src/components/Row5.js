import React, { Component } from 'react';
import { connect } from 'react-redux';

class Row5 extends Component {
	
	displayValue = (e) => {
	
		this.props.typeAdd(e.target.getAttribute('val'));
	}
	
	
	render() {
		
		return (
			<div className="row5">
			<div className="doubleKey">
			<br/>
			ctrl 
			</div>
			<div className="shiftHalf">
			<br/>
			  win<br/>
			</div>
			<div className="shiftHalf">
			<br/>
			 alt<br/>
			</div>
			<div className="spaceKey" val=" " onClick={this.displayValue}>
			<br/>
			<br/>
			</div>
			<div className="shiftHalf">
			<br/>
			 altgr<br/>
			</div>
			<div className="shiftHalf">
			<br/>
			 win<br/>
			</div>
			<div className="shiftHalf">
			<br/>
			 &hArr;<br/>
			</div>
			<div className="doubleKey">
			<br/>
			ctrl 
			</div>
		
			
			
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		shiftOnOff: state.shiftOnOff
	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        submitSearch: (combinedArray) => {dispatch({type: 'SUBMITSEARCH', combinedArray: combinedArray})},
		typeAdd: (value) => {dispatch({type: 'TYPEADD', value: value})},
		deleteChar: () => {dispatch({type: 'DELETE'})}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Row5);