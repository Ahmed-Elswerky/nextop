import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
var firebaseConfig = {
	apiKey: 'AIzaSyCHhMsOlQ_n3ONHkyudL63VpiMtWvds2X0',
	authDomain: 'nex-po.firebaseapp.com',
	projectId: 'nex-po',
	storageBucket: 'nex-po.appspot.com',
	messagingSenderId: '271652050599',
	appId: '1:271652050599:web:38ac240fd5c313b03a6d82',
	measurementId: 'G-JB32XYDD4K',
};
// Initialize Firebase
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

var uiConfig = {
	signInFlow: 'popup',
	signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};
function SignInScreen() {
	const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

	// Listen to the Firebase Auth state and set the local state.
	useEffect(() => {
		const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
			setIsSignedIn(!!user);
		});

		return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
	}, []);

	if (!isSignedIn) {
		return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />;
	}
	return (
		<div>
			<p style={{ display: 'inline-block' }}>Hi, {firebase.auth().currentUser.displayName}! </p>
			<a onClick={() => firebase.auth().signOut()} style={{ fontSize: '0.75rem' }}>
				{' '}
				Sign-out
			</a>
		</div>
	);
}

export { SignInScreen };
export default firebase;
