import firebase from './config.js'

export const getAllpostsids = async()=>{
    let ids = []
    const posts = await firebase.firestore().collection('posts').get()
    const posts_id = posts.docs.map(p=>({params:{id:p.id}}))
    return {posts_id}
}
export const getPostData = async (id)=> {
    const posta = await firebase.firestore().collection('posts').doc(id).get()
    const post = posta.data().info
    return {
        id,
        post
    }
}