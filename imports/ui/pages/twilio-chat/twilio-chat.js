import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Video from 'twilio-video';


export class TwilioChat extends React.Component {
	constructor(props){
		super(props);
		this.startVideo = this.startVideo.bind(this);

	}
	startVideo(){
		const { token } = this.props;
		const client = new Video.Client(token, , { logLevel: 'debug' });

		const localMedia = new Video.LocalMedia();

		// You can call getUserMedia and add the resulting MediaStream to localMedia.
		Video.getUserMedia().then(mediaStream => {
		  localMedia.addStream(mediaStream);
		});

		// Or you can add the microphone and camera independently.
		localMedia.addMicrophone().then(() => {
		  return localMedia.addCamera();
		});

		client.connect({ to: 'my-room', localMedia: localMedia}, function(error, response){
			console.log(error);
			console.log(response);

		});

		
	}
	render(){

		return <div className="Index">
				<button onClick={this.startVideo}>Start Chat</button>
			  </div>
	}
}

