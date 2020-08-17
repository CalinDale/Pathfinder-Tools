import { Component } from "react";
import { connect } from "react-redux";
import { initFilteredMonsters } from "../store/actions/filteredMonstersActions";

class Initializer extends Component {
	componentDidMount() {
		this.initialize();
	}

	initialize() {
		this.props.initFilteredMonsters();
	}

	render() {
		return true;
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		initFilteredMonsters: () => {
			dispatch(initFilteredMonsters());
		},
	};
};

export default connect(null, mapDispatchToProps)(Initializer);
