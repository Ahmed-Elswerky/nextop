import Head from 'next/head';
import firebase from '../../lib/config.js';
import { getAllpostsids, getPostData } from '../../lib/posts';

import { GeistProvider, CssBaseline, Card, Grid } from '@geist-ui/react';

export default function note(props) {
	return (
		<>
			<Head>
				<title>{props.id}</title>
			</Head>
			<Grid.Container style={{ height: '80%' }} justify="center" alignItems="center">
				<Grid xs={12}>
					<Card shadow>
						<h1>post</h1>
						<br />
						{props.post}
						<div id="info"></div>
					</Card>
				</Grid>
			</Grid.Container>
		</>
	);
}

export async function getServerSideProps(context) {
	const data = await getPostData(context.query.id);

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { ...data }, // will be passed to the page component as props
	};
}

// export async function getStaticPaths(){
//     var paths = await getAllpostsids()
//     paths=paths.posts_id
//     return {paths,fallback:false}
// }

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }
