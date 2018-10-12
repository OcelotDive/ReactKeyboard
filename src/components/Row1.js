import React, { Component } from 'react';
import { connect } from 'react-redux';

class Row1 extends Component {
	
	
	displayValue = (e) => {
	
		this.props.shiftOnOff ?
			
		this.props.typeAdd(e.target.getAttribute('secval'))
		:
		this.props.typeAdd(e.target.getAttribute('val'));
	}
	
	handleBackSpace = () => {
		this.props.deleteChar();
	}
	
	
	render() {
		
		return (
			<div className="row1">
			<div className="mainKey" val="'" secval="¬" onClick={this.displayValue}>
			¬<br/>
			{"`"}
			</div>
			<div className="mainKey" val="1" secval="!" onClick={this.displayValue}>
			!<br/>
			1
			</div>
			<div className="mainKey" val="2" secval='"' onClick={this.displayValue}>
			"<br/>
			2
			</div>
			<div className="mainKey" val="3" secval="£" onClick={this.displayValue}>
			£<br/>
			3
			</div>
			<div className="mainKey" val="4" secval="$" onClick={this.displayValue}>
			$<br/>
			4
			</div>
			<div className="mainKey" val="5" secval="%" onClick={this.displayValue}>
			%<br/>
			5
			</div>
			<div className="mainKey" val="6" secval="^" onClick={this.displayValue}>
			^<br/>
			6
			</div>
			<div className="mainKey" val="7" secval="&" onClick={this.displayValue}>
			&<br/>
			7
			</div>
			<div className="mainKey" val="8" secval="*" onClick={this.displayValue}>
			*<br/>
			8
			</div>
			<div className="mainKey" val="9" secval="(" onClick={this.displayValue}>
			(<br/>
			9
			</div>
			<div className="mainKey" val="0" secval=")" onClick={this.displayValue}>
			)<br/>
			0
			</div>
			<div className="mainKey" val="-" secval="_" onClick={this.displayValue}>
			_<br/>
			-
			</div>
			<div className="mainKey" val="=" secval="+" onClick={this.displayValue}>
			+<br/>
			=
			</div>
			<div className="doubleKey"  onClick={this.handleBackSpace}>
			&larr;	<br/>
				<br/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Row1);