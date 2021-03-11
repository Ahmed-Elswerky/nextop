import '../styles/globals.css';
import { Breadcrumbs, Row, Col } from '@geist-ui/react';
import { Home } from '@geist-ui/react-icons';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import firebase, { SignInScreen } from '../lib/config.js';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// import ToggleCompo from './darkTogg';
const Tog = dynamic(() => import('../lib/darktogg.js'));
function MyApp({ Component, pageProps }) {
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
			<Row style={{ padding: '4rem 0 0 7rem', textAlign: 'center' }}>
				<Breadcrumbs size="large">
					<Breadcrumbs.Item key="b1">
						<Link href="/" key="k1">
							<Home key="l2" />
						</Link>
					</Breadcrumbs.Item>
					{pageProps.id !== undefined ? <Breadcrumbs.Item key="b2">{pageProps.id}</Breadcrumbs.Item> : ''}
				</Breadcrumbs>
				<Col style={{ float: 'right', textAlign: 'right', paddingRight: '7rem' }}>
					<SignInScreen />
					<Tog />
				</Col>
			</Row>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
