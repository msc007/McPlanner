// CODE WILL BE RUN IN FIREBASE SERVER
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();
firestore.settings({timestampsInSnapshots: true});﻿


exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello, MC!");
});



//Trigger Notification when new project published on server
const createNotification = (notification) => {
	return admin.firestore().collection('notifications')
							.add(notification)
							.then(doc => console.log('notification added', doc));
}
exports.projectCreated = functions.firestore
	.document('projects/{projectId}')
	.onCreate(doc => {
		const project = doc.data();
		const notification = {
			content: 'Added a new Project',
			user: `${project.authorFirstName} ${project.authorLastName}`,
			time: admin.firestore.FieldValue.serverTimestamp()
		};

		return createNotification(notification);
});


//Trigger Notification when new user signup
exports.userJoined = functions.auth.user().onCreate(user => {
	return admin.firestore().collection('users')
						  .doc(user.uid)
						  .get().then( doc => {
							  const newUser = doc.data();
							  const notification = {
								  content: 'Jointed the Party',
								  user: `${newUser.firstName} ${newUser.lastName}`,
								  time: admin.firestore.FieldValue.serverTimestamp()
							  };
							  return createNotification(notification);
						  });
											
});


//To Deploy function: $firebase deploy --only functions
