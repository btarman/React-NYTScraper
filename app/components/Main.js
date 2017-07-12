const React = require("react");
const Results = require('./Results');
const Saved = require('./Saved');
const Search = require('./Search');



var Main = React.createClass({
	getInitialState: function() {
	    return {
	      articles: []
	    };
	  },

  search: function(topic, beginDate, endDate) {

		let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
			'api-key': 'debd4d7e5dac4e3f9e0dde7690009791',
			'q': topic,
			'begin_date': beginDate,
			'end_date': endDate
		})
		$.ajax({
				url: url,
				method: 'GET'
		}).done((result) => {
			console.log(result)
			this.setState({
				articles: result.response.docs
			})
		});
  	},

  // Here we render the function
  render: function() {
    return (
    	<div className="container">
    		<Search search={this.search} />
    		<Results articles={this.state.articles} />
    		<Saved />
    	</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;