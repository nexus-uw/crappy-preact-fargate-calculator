

import { h, Component } from 'preact';
import style from './style';
const ram = 0.5;
const vcpu = 0.25;
const cost = (ram * 0.0506) + (vcpu * 0.0127);

const rams = [0.5, 1, 2, 3];

export default class App extends Component {
	state = {
		time: Date.now(),
		count: 10,
		vcpu,
		ram,
		cost,
		rams
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
		console.log(event.target.value);
		this.setState({ ram: parseFloat(event.target.value) });
		this.updateCost();

	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count, rams }) {
		return (
			<div id="app" class={style.profile}>
				<h1>(a really crummy) Fargate Pricing Calculator</h1>
				<p>This is the user profile for a user named {user}.</p>
				<div><label>vpcu</label>


					<select value={this.state.vcpu} onChange={this.handleVcpuChange}>
						<option value="0.25">0.25</option>
						<option value="0.5">0.5</option>
						<option selected value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>


				</div>
				<div>
					<label>ram (GB)</label>
					<select value={this.state.ram} onChange={this.handleRamChange}>
						{rams.map(r => <option key={r} value={r}>{r}</option>)}
					</select>

				</div>
				<div> cost ${this.state.cost} per hour</div>

				<div><a href="https://aws.amazon.com/fargate/pricing/">source</a></div>
				<footer>note: these prices are from Dec 10 2017 for usa-east-1</footer>
				<footer>note: ram is not being properly limited to selected vcpu allowed range...</footer>
			</div>
		);
	}
}
