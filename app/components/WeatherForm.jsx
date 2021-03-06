var React = require('react');

var WeatherForm = React.createClass({

	handleSubmit: function(e){
		e.preventDefault();
		var city = this.refs.city.value;
		if (city.length > 0){
			this.refs.city.value = '';
			this.props.onNewData(city);
		}
	},


	render: function(){
		return (
			<form onSubmit={this.handleSubmit} className='text-center'>
				<div>
					<input type="search" ref="city" placeholder="Search weather by city"/>
				</div>
				<div>	
					<button className='button'>Get Weather</button>
				</div>	
			</form>
		)
	}
});

module.exports = WeatherForm;
