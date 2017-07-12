const React = require('react');

const Results = React.createClass({
	saveArticle: function(article) {
		let request = {
			title: article.headline.main,
			date: article.pub_date,
			url: article.web_url
		}
		$.ajax({
			url: "/api/saved",
			method: "POST",
			data: request
		}).done((results) => {
			console.log("Article Saved");
		})
	},
	render: function() {
		return (
		<div className="panel panel-default">
 			 <div className="panel-body">
				{this.props.articles.map((article, index) =>{
					return (
						<div>
							<p key={index}>{article.headline.main}</p>
							<button onClick={() => this.saveArticle(article)}>Save</button>
						</div>
						)
				})}

  			</div>
		</div>
			);
	}
});

module.exports = Results;