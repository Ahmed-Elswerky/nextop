import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import firebase from '../lib/config.js';
import React from 'react';
import { Card, Grid } from '@geist-ui/react';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ret: [],
			posts: [],
		};
	}

	componentDidMount() {
		let _this = this;
		let post = [];
		const db = firebase.firestore(),
			data = db.collection('posts');
		data.onSnapshot((r) => {
			post = [];
			r.docs.map((d) => {
				post.push(
					<Link href={'/notes/' + d.id}>
						<p>{d.data().info}</p>
					</Link>
				);
				_this.setState({ posts: post });
			});
		});
	}

	render() {
		return (
			<div className={styles.container}>
				<h1>HEllo from the other freaking helling shitting side</h1>
				<br />
				<Link href="/add_post">add post</Link>
				<Card shadow style={{ width: 'auto' }}>
					<div id="hell" style={{ wordBreak: 'break-word' }}>
						{this.state.posts}
					</div>
				</Card>
			</div>
		);
	}
}
