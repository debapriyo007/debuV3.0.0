import React, { Component } from 'react';
import BootingScreen from '@/components/screen/booting-screen';
import Desktop from '@/components/screen/desktop';
import LockScreen from '@/components/screen/lock-screen';
import Navbar from '@/components/screen/navbar';
import ReactGA from 'react-ga4';

export default class Ubuntu extends Component {
	constructor() {
		super();
		this.state = {
			screen_locked: false,
			bg_image_name: 'wall-6',
			booting_screen: false,
			shutDownScreen: false
		};
	}

	componentDidMount() {
		this.getLocalData();
	}

	setTimeOutBootScreen = () => {
		setTimeout(() => {
			this.setState({ booting_screen: false });
		}, 1000);
	};

	getLocalData = () => {
		// Get Previously selected Background Image
		let bg_image_name = localStorage.getItem('bg-image');
		if (bg_image_name !== null && bg_image_name !== undefined && bg_image_name !== 'wall-2' && bg_image_name !== 'wall-9') {
			let clean = bg_image_name.replace(/\.(jpg|webp|png)$/, "");
			this.setState({ bg_image_name: clean });
		} else {
			this.setState({ bg_image_name: 'wall-6' });
			localStorage.setItem('bg-image', 'wall-6');
		}

		// Ensure booting screen is never stuck
		this.setState({ booting_screen: false, shutDownScreen: false });
		localStorage.setItem('booting_screen', false);
		localStorage.setItem('shut-down', false);

		// Get previous lock screen state
		let screen_locked = localStorage.getItem('screen-locked');
		if (screen_locked !== null && screen_locked !== undefined && screen_locked === 'true') {
			this.setState({ screen_locked: true });
		} else {
			this.setState({ screen_locked: false });
		}
	};

	lockScreen = () => {
		// google analytics
		ReactGA.send({ hitType: "pageview", page: "/lock-screen", title: "Lock Screen" });
		ReactGA.event({
			category: `Screen Change`,
			action: `Set Screen to Locked`
		});

		document.getElementById('status-bar')?.blur();
		setTimeout(() => {
			this.setState({ screen_locked: true });
		}, 100); // waiting for all windows to close (transition-duration)
		localStorage.setItem('screen-locked', true);
	};

	unLockScreen = () => {
		ReactGA.send({ hitType: "pageview", page: "/desktop", title: "Custom Title" });

		window.removeEventListener('click', this.unLockScreen);
		window.removeEventListener('keypress', this.unLockScreen);

		this.setState({ screen_locked: false });
		localStorage.setItem('screen-locked', false);
	};

	changeBackgroundImage = (img_name) => {
		let clean = img_name ? img_name.replace(/\.(jpg|webp|png)$/, "") : "wall-6";
		this.setState({ bg_image_name: clean });
		localStorage.setItem('bg-image', clean);
	};

	shutDown = () => {
		ReactGA.send({ hitType: "pageview", page: "/switch-off", title: "Custom Title" });

		ReactGA.event({
			category: `Screen Change`,
			action: `Switched off the Ubuntu`
		});

		document.getElementById('status-bar')?.blur();
		this.setState({ shutDownScreen: true });
		localStorage.setItem('shut-down', true);
	};

	turnOn = () => {
		ReactGA.send({ hitType: "pageview", page: "/desktop", title: "Custom Title" });

		this.setState({ shutDownScreen: false, booting_screen: true });
		this.setTimeOutBootScreen();
		localStorage.setItem('shut-down', false);
	};

	render() {
		return (
			<div className="w-screen h-screen overflow-hidden" id="monitor-screen">
				<LockScreen
					isLocked={this.state.screen_locked}
					bgImgName={this.state.bg_image_name}
					unLockScreen={this.unLockScreen}
				/>
				<BootingScreen
					visible={this.state.booting_screen}
					isShutDown={this.state.shutDownScreen}
					turnOn={this.turnOn}
				/>
				<Navbar lockScreen={this.lockScreen} shutDown={this.shutDown} />
				<Desktop bg_image_name={this.state.bg_image_name} changeBackgroundImage={this.changeBackgroundImage} />
			</div>
		);
	}
}
