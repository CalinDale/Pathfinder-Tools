import React, { Component } from "react";
import { csvjson } from "../resources/csvjson";
import { connect } from "react-redux";
import { uploadMonster } from "../store/actions/uploadMonsterActions";

class UploadMonsters extends Component {
	state = { monsters: csvjson };
	uploadTheMonsters() {
		/*this.state.monsters.forEach((monster) => {
			this.props.uploadMonster(monster);
      });*/
		console.log("MONSTER UPLOADING DISABLED IN CODE");
	}
	render() {
		return (
			<button
				className="UploadButton"
				onClick={this.uploadTheMonsters.bind(this)}
			>
				Upload the monsters
			</button>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		uploadMonster: (monster) => {
			dispatch(uploadMonster(monster));
		},
	};
};

export default connect(null, mapDispatchToProps)(UploadMonsters);
