import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';
import {TwilioChat} from './twilio-chat.js';
import Loading from '../../components/Loading.js';

const composer = (params, onData) => {
	

	Meteor.call('utilities.getTwilioToken', function(error, response){
		if (error) { console.log(response); return;  }
		console.log(response)
		let token = response;
		onData(null, { token });
	});
    
};

export default composeWithTracker(composer, Loading)(TwilioChat);
