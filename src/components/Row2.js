import React, { Component } from 'react';
import { connect } from 'react-redux';

class Row2 extends Component {
	
	displayValue = (e) => {
	
		this.props.capsOnOff || this.props.shiftOnOff ?
			
		this.props.typeAdd(e.target.getAttribute('secval'))
		:
		this.props.typeAdd(e.target.getAttribute('val'));
	}
	

	
	render() {

		return (
			<div className="row2">
			<div className="doubleKey" val="   " secval="   " onClick={this.displayValue}>
			 tab<br/>
				<br/> 
			</div>
			<div className="mainKey" val="q" secval="Q" onClick={this.displayValue}>
			Q<br/>
			  <br/>
			</div>
			<div className="mainKey" val="w" secval="W" onClick={this.displayValue}>
			W<br/>
			<br/>
			</div>
			<div className="mainKey" val="e" secval="E" onClick={this.displayValue}>
			E<br/>
			<br/>
			</div>
			<div className="mainKey" val="r" secval="R" onClick={this.displayValue}>
			R<br/>
			<br/>
			</div>
			<div className="mainKey" val="t" secval="T" onClick={this.displayValue}>
			T<br/>
			<br/>
			</div>
			<div className="mainKey" val="y" secval="Y" onClick={this.displayValue}>
			Y<br/>
			<br/>
			</div>
			<div className="mainKey" val="u" secval="U" onClick={this.displayValue}>
			U<br/>
			<br/>
			</div>
			<div className="mainKey" val="i" secval="I" onClick={this.displayValue}>
			I<br/>
			<br/>
			</div>
			<div className="mainKey" val="o" secval="O" onClick={this.displayValue}>
			O<br/>
			<br/>
			</div>
			<div className="mainKey" val="p" secval="P" onClick={this.displayValue}>
			P<br/>
			<br/>
			</div>
			<div className="mainKey"val="[" secval="{" onClick={this.displayValue}>
			{'{'}<br/>
			{'['}
			</div>
			<div className="mainKey" val="]" secval="}" onClick={this.displayValue}>
			{'}'}<br/>
			{']'}
			</div>
			<div className="enterKey" val="&#13;&#13;" secval="&#13;"onClick={this.displayValue}>
			  	&crarr;  <br/>
				<br/>
			</div>
			
			
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		capsOnOff: state.capsOnOff,
		shiftOnOff: state.shiftOnOff
	
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
        submitSearch: (combinedArray) => {dispatch({type: 'SUBMITSEARCH', combinedArray: combinedArray})},
		typeAdd: (value) => {dispatch({type: 'TYPEADD', value: value})}
	
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Row2);