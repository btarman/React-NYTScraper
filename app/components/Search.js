const React = require('react');

const Search = React.createClass({
	getInitialState: function() {
	    return {
	      topic: "",
	      beginDate: "",
	      endDate: ""
	    };
	  },

	setTopic: function(event) {
		this.setState({topic: event.target.value})
	},

	setBeginDate: function(event) {
		this.setState({beginDate: event.target.value})
	},

	setEndDate: function(event) {
		this.setState({endDate: event.target.value})
	},

  	search: function(event) {
  		event.preventDefault();

  		let beginDate = this.state.beginDate.replace(/-/g, "");
		let endDate = this.state.endDate.replace(/-/g, "");

  		this.props.search(this.state.topic, beginDate, endDate);
  	},

	render: function() {
		return (
			<div className="panel panel-default">
  				<div className="panel-body">
  					<h2>Search</h2>
  					<form onSubmit={this.search}>
  					 	<input type="text" name="topic" value={this.state.topic} onChange={this.setTopic}></input>
 					 	<input type="date" name="startYear" value={this.state.beginDate} onChange={this.setBeginDate}></input>
 					 	<input type="date" name="endYear" value={this.state.endDate} onChange={this.setEndDate}></input>
 					 	<input type="submit" value="Submit"></input>
					</form>
  				</div>
			</div>
			)
	}
});

module.exports = Search;