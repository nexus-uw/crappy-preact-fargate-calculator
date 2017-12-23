

import { h, Component } from 'preact';
import style from './style';
const ram = 0.5;
const vcpu = 0.25;
const cost = (ram * 0.0506) + (vcpu * 0.0127);

function getRamsForVcpu(vcpu) {
	function getList(min, max) {
		let list = [];
		for (let i = min; i <= max; i++) {
			list.push(i);
		}
		return list;
	}

	switch (vcpu) {
		case 0.25:
			return [0.5, 1, 2];
		case 0.5:
			return getList(1, 3);
		case 1:
			return getList(2, 8);
		case 2:
			return getList(4, 16);
		case 4:
			return getList(8, 30);
		default:
			throw new Error('unexpected vcpu value: ' + vcpu);
	}
}


export default class App extends Component {
	state = {
		time: Date.now(),
		count: 10,
		vcpu,
		ram,
		cost,
		rams: getRamsForVcpu(vcpu)
	};

	updateCost = () => {
		this.setState({
			cost: (this.state.ram * 0.0506) + (this.state.vcpu * 0.0127)
		});
	}

	handleVcpuChange = (event) => {
		const rams = getRamsForVcpu(parseFloat(event.target.value));
		const ram = (rams.indexOf(parseFloat(this.state.ram)) === -1) ? rams[0] : this.state.ram;


		this.setState({
			vcpu: event.target.value,
			rams,
			ram
		});

		this.updateCost();
	}

	handleRamChange = (event) => {
		this.setState({ ram: parseFloat(event.target.value) });
		this.updateCost();

	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count, rams }) {
		return (
			<div id="app" class={style.profile}>

				<h1>(a really crummy) Fargate Pricing Calculator</h1>

				<div><label>vpcu</label>
					<select value={this.state.vcpu} onChange={this.handleVcpuChange}>
						<option value="0.25">0.25</option>
						<option value="0.5">0.5</option>
						<option selected value="1">1</option>
						<option value="2">2</option>
						<option value="4">4</option>
					</select>
				</div>
				<div>
					<label>ram (GB)</label>
					<select value={this.state.ram} onChange={this.handleRamChange}>
						{this.state.rams.map(r => <option key={r} value={r}>{r}</option>)}
					</select>

				</div>
				<div> <h3>cost ~${this.state.cost.toFixed(4)} per hour </h3></div>
				<hr />
				<div><a href="https://aws.amazon.com/fargate/pricing/">aws fargate pricing</a></div>
				<div>note: these prices are from Dec 10 2017 for us-east-1</div>
				<div> source code available at <a href="https://github.com/nexus-uw/crappy-preact-fargate-calculator">nexus-uw/crappy-preact-fargate-calculator</a></div>
				<img src="assets/709.png" />
				<footer />

			</div>
		);
	}
}
