import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Video from 'twilio-video';


export class TwilioChat extends React.Component {
	constructor(props){
		super(props);
		this.startVideo = this.startVideo.bind(this);

	}
	startVideo(){
		const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzU2ZGFjMDU5ODdhM2NlMzEzMDNhNDhjZDFlZWY1OTNkLTE0ODExNDcwMzciLCJpc3MiOiJTSzU2ZGFjMDU5ODdhM2NlMzEzMDNhNDhjZDFlZWY1OTNkIiwic3ViIjoiQUNkYzJiN2NiNzdhMDVjMThlMDAzODE4OGVmM2I5ZDA5ZCIsImV4cCI6MTQ4MTE1MDYzNywiZ3JhbnRzIjp7ImlkZW50aXR5IjoiYW50aG9ueSIsInJ0YyI6eyJjb25maWd1cmF0aW9uX3Byb2ZpbGVfc2lkIjoiVlNlNWViNTFjMWY0N2JiYTczYjgyYTllZWQ2Y2E2NmZmMCJ9fX0.lPheRPov7gs0VMbk6_GptoLy1loM4k5L3x9Q3WNCPzQ'
		const client = new Video.Client(token,{ logLevel: 'debug' });

		const localMedia = new Video.LocalMedia();

		// You can call getUserMedia and add the resulting MediaStream to localMedia.
		Video.getUserMedia().then(mediaStream => {
		  localMedia.addStream(mediaStream);
		});

		// Or you can add the microphone and camera independently.
		client.connect({
		  to: 'my-room',
		  localMedia: localMedia
		}).then(room => {
		  console.log('Connected to the Room "%s"', room.name);
		}, error => {
		  console.error('Failed to connect to the Room', error);
		});

		
	}
	render(){

		return <div className="Index">
				<button onClick={this.startVideo}>Start Chat</button>
			  </div>
	}
}

