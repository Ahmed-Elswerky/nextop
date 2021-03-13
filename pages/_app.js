import '../styles/globals.css';
import { Breadcrumbs, Grid, Row, Col } from '@geist-ui/react';
import { Home, LogIn } from '@geist-ui/react-icons';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import firebase, { SignInScreen } from '../lib/config.js';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useState } from 'react';

// import ToggleCompo from './darkTogg';
const Tog = dynamic(() => import('../lib/darktogg.js'));
function MyApp({ Component, pageProps }) {
	const [tru, setTru] = useState(false);
	return (
		<>
			<Head>
				<title>Nextpo - the posting site</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="description"
					content="This is a demo site, made while learning next.js, and it basically saves your posts no matter who you are, signed or not"
				/>
				<meta name="robots" content="index, follow" />
				<meta name="google-site-verification" content="FF9jOpPtfEehqUzBdcRYuIV-XmNBfWHQoWcp96xKRD0" />
			</Head>
			<Grid.Container justify="space-evenly" style={{ alignItems: 'center' }}>
				<Grid>
					<Breadcrumbs size="large">
						<Breadcrumbs.Item key="b1">
							<Link href="/" key="k1">
								<Home key="l2" />
							</Link>
						</Breadcrumbs.Item>
						{pageProps.id !== undefined ? <Breadcrumbs.Item key="b2">{pageProps.id}</Breadcrumbs.Item> : ''}
					</Breadcrumbs>
				</Grid>
				<Grid>
					<LogIn
						onClick={() => {
							tru ? setTru(false) : setTru(true);
						}}
					/>
					<div id="sign" className={tru ? 'signShow' : ''}>
						<SignInScreen />
					</div>
					<style jsx>{`
						#sign {
							display: inline-block;
							transform: scale(0);
							transition: 0.5s;
							transform-origin: center;
						}
						.signShow {
							transform: scale(1) !important;
						}
					`}</style>
				</Grid>
				<Grid>
					<Tog />
				</Grid>
			</Grid.Container>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
