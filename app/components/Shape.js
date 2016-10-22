import React from 'react';

/**
* Create a figure shape made out of lines of dot images
* props: name
* state: shape
**/
var Shape = React.createClass({

	// initialize shape state
	getInitialState: function() {
		return { shape: this.props.name };
	},

	// define figure shapes as an array of number of dots per line
	figureShapes: {
		Square: [5,5,5,5,5],
		Diamond: [1,2,3,4,5,4,3,2,1],
	},

	// create a single line of a figure by numDots
	line: function(numDots) {
		var line = [];

		for(let i=0; i<numDots; i++) {
			line.push(<img key={i} src="http://www.ghmhq.com/big_red_dot.jpg" className="red-dot" alt="red-dot" />);
		}

		return line;
	},

	// create a figure determined by shape
	figure: function(shape) {

		shape = (this.figureShapes[shape]) ? this.figureShapes[shape] : [];

		return shape.map(function(numDots, i) {
			return <div key={i}> {this.line(numDots)} </div>
		}, this);
	},

	render: function() {
		return <div className="shape"> {this.figure(this.props.name)} </div>
	}
});

export default Shape;

