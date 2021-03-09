import '../styles/globals.css';
import { Breadcrumbs, Row, Col } from '@geist-ui/react';
import { Home } from '@geist-ui/react-icons';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import firebase, { SignInScreen } from '../lib/config.js';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// import ToggleCompo from './darkTogg';
const Tog = dynamic(() => import('../lib/darktogg.js'));
function MyApp({ Component, pageProps }) {
	return (
		<>
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
