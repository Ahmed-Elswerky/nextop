import {useRouter} from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import firebase from '../lib/config.js'

export default function note({note}){
    var router = useRouter()
    var {id} = router.query
    function add(e){
        firebase.firestore().collection('posts').add({info:e.value})
        .then(k=>{
            e.value=''
        })
    }
    return (<>
        <Head>
            <title>
                Add a post
            </title>   
              
        </Head>
        <Link href='/'>home</Link> 
        <h1>Add a post</h1>
        <div style={{width:'8rem',height:'10rem'}}>
            <textarea name="post" cols="30" rows="10"></textarea>
            <button type="submit" onClick={(e)=>add(e.target.parentElement.children[0])}>Add</button>
        </div>
        </>)
}

