import { h, Component } from 'preact';
import style from './style';
const ram = 0.5;
const vcpu = 0.25;
const cost = (ram * 0.0506) + (vcpu * 0.0127);

export default class Profile extends Component {
	state = {
		time: Date.now(),
		count: 10,
		vcpu,
		ram,
		cost
	};

	updateCost = () => {
		this.setState({
			cost: (this.state.ram * 0.0506) + (this.state.vcpu * 0.0127)
		});
	}

	handleVcpuChange = (event) => {
		this.setState({
			vcpu: event.target.value
		});

		this.updateCost();
	}

	handleRamChange = (event) => {
		this.setState({ ram: event.target.value });
		this.updateCost();

	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p>This is the user profile for a user named {user}.</p>
				<div><label>vpcu</label>
					<input type="number" value={this.state.vcpu} min="0.25" max="4" onChange={this.handleVcpuChange} />
				</div>
				<div>
					<label>ram</label>
					<input type="number" value={this.state.ram} min="0.5" max="30" onChange={this.handleRamChange} />
				</div>
				<div> cost ${this.state.cost}</div> per hour

			</div>
		);
	}
}
