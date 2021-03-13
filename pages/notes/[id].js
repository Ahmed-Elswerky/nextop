import Head from 'next/head';
import firebase from '../../lib/config.js';
import { getAllpostsids, getPostData } from '../../lib/posts';
import { GeistProvider, CssBaseline, Card, Grid } from '@geist-ui/react';
import { graphql, buildSchema } from 'graphql';
import { useState } from 'react';

var schema = buildSchema(`
        type Query {
            hello: String
        }
    `);

var root = { hello: () => 'Hello world!' },
	ress;
graphql(schema, '{ hello }', root).then((response) => {
	console.log(response);
	ress = response;
});
export default function note(props) {
	const [res, setRes] = useState(ress);

	return (
		<>
			<Head>
				<title>{props.id}</title>
			</Head>
			<Grid.Container style={{ height: '80%' }} justify="center" alignItems="center">
				<Grid xs={12}>
					<Card shadow style={{ wordBreak: 'break-word' }}>
						<h1>post</h1>
						<br />
						<div id="info">{props.post}</div>
						{'aaaa ' + res.data.hello}
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
