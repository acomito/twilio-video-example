import { Meteor } from 'meteor/meteor';

Meteor.methods({
	'utilities.getTwilioToken': function(){
		return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzU2ZGFjMDU5ODdhM2NlMzEzMDNhNDhjZDFlZWY1OTNkLTE0ODExNDcwMzciLCJpc3MiOiJTSzU2ZGFjMDU5ODdhM2NlMzEzMDNhNDhjZDFlZWY1OTNkIiwic3ViIjoiQUNkYzJiN2NiNzdhMDVjMThlMDAzODE4OGVmM2I5ZDA5ZCIsImV4cCI6MTQ4MTE1MDYzNywiZ3JhbnRzIjp7ImlkZW50aXR5IjoiYW50aG9ueSIsInJ0YyI6eyJjb25maWd1cmF0aW9uX3Byb2ZpbGVfc2lkIjoiVlNlNWViNTFjMWY0N2JiYTczYjgyYTllZWQ2Y2E2NmZmMCJ9fX0.lPheRPov7gs0VMbk6_GptoLy1loM4k5L3x9Q3WNCPzQ'
	}
});