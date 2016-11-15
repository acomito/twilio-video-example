# Exmaple


# To run

* make sure you have meteor installed
* clone repo
* cd to root folder
* run `meteor npm install`
* run `npm install`
* add your development twilio video token to the relevant code inside imports/ui/pages/Index.js
```
		const client = new Video.Client('Token Here', { logLevel: 'debug' });
		const localMedia = new Video.LocalMedia();
```
* run 'meteor npm start'


The app should boot up on localhost

Open the chrome console and click the "Start Twilio" button.

The relevant code is in imports/ui/pages/Index.js
