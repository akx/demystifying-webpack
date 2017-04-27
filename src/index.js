import React from 'react';
import ReactDOM from 'react-dom';
import CatImageURL from './cat.png';
import MiauSoundURL from './miau.mp3';
import style from './style.styl';

const playMiau = () => {
	const el = Object.assign(
		document.createElement('audio'),
		{
			src: MiauSoundURL,
			autoPlay: false,
			playbackRate: 0.5 + Math.random()
		}
	);
	document.body.appendChild(el);
	el.play();
	// TODO: clean up the stray cats
};

class CatApp extends React.Component {
	constructor() {
		super();
		this.state = {number: 1};
	}
	render() {
		const cats = [];
		for(let i = 0; i < this.state.number; i++) {
			cats.push(
				<img
				onMouseOver={playMiau}	
				src={CatImageURL}
				key={i}
				/>);
		}
		return (
			<div>
				<audio src={MiauSoundURL} autoPlay={false} ref={(el) => this.audio = el} />
				<h1>Cat app</h1>
				<button
					onClick={(e) => this.setState({number: this.state.number + 1})}>More mew!</button>
				<br />
				{cats}
			</div>
		);
	}
}

ReactDOM.render(<CatApp />, document.body);
