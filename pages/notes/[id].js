import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import firebase from '../../lib/config.js';
import React, { useState } from 'react';
import { getAllpostsids, getPostData } from '../../lib/posts';

export default function note(props) {
	const [post, setpost] = useState('');
	var router = useRouter();
	var { id } = router.query;
	let data = '';

	return (
		<>
			<Head>
				<title>{props.id}</title>
			</Head>
			<div>
				<Link href="/">home</Link>
				<h1>post</h1>
				<br />
				{props.post}
				<div id="info"></div>
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
    const data = await getPostData(context.query.id)
    console.log(data,'--------------------------------')

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: {...data}, // will be passed to the page component as props
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
