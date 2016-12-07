import React from 'react';
import TwilioChat from './twilio-chat/twilio-chat-container';


class Index extends React.Component {
	constructor(props){
		super(props);

	}
	render(){

		return <div className="Index">
			    <TwilioChat />
			  </div>
	}
}

export default Index;
