var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

	handleSubmit: function(e){
		e.preventDefault();
		var location = this.refs.search.value;
		var encodedLocation = encodeURIComponent(location);
		if (location && location.length > 0){
			this.refs.search.value = '';
			window.location.hash = '#/?location=' + encodedLocation;
		}
	},

	render: function(){
		return (
			<div className='top-bar'>
				<div className='top-bar-left'>
					<ul className='menu'>
						<li className='menu-text'>Yueyang Zheng</li>
						<li>
							<Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About me</Link>
						</li>
						<li>
							<Link to="example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Blog</Link>
						</li>						
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather Gadget</IndexLink>
						</li>	
					</ul>
				</div>

				<div className='top-bar-right'>
					<form onSubmit={this.handleSubmit}>
						<ul className='menu'>
								<li>
									<input type='search' ref='search' placeholder='Search weather by city'/>
								</li>
								<li>
									<input type='submit' className='button' value='Get Weather'/>
								</li>
						</ul>
					</form>	
				</div>
			</div>
	);
	}
});


module.exports = Nav;
