import Header from "../../components/Header/Header"
import axios from "axios"
import { useContext } from "react"
import {GlobalContext} from "../../context/GlobalContext"
import { StyleContainerModal, StyleSection } from "./styleModalPost"
import like from "../../img/icon-reaction-up.svg"
import dislike from "../../img/icon-reaction-down.svg"
import comment from "../../img/chat-box-icon.svg"
import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/BASE_URL"

function ModalPost(props){

    const context = useContext(GlobalContext)
    const [post, setPost] = useState({})
    const [content, setContent] = useState('')

    useEffect(()=>{
        browserPost()
    },
    [])

    const browserPost = async()=>{
        try {
            let auxPost = ''
            const response = await axios.get(`${BASE_URL}/posts/${context.urlPost}`,{
                headers:{
                    Authorization:window.localStorage.getItem("TokenApi-Labeddit")
                }})
            auxPost = response.data[0]
            console.log("Post", response.data[0])  
            setPost(auxPost)
        } catch (error) {
            console.log(error)
        }
    }

    const likePost = async (postId)=>{
        try {
            let body = {
                like: 1,
            }
            await axios.put(`${BASE_URL}/posts/${postId}/like`,body,{
                headers:{
                    Authorization:window.localStorage.getItem("TokenApi-Labeddit")
                }})
                browserPost()
                props.browserPosts()
        } catch (error) {
            console.log(error)
        }
    }

    const dislikePost = async (postId)=>{
        try {
            let body = {
                like: 0,
            }
            await axios.put(`${BASE_URL}/posts/${postId}/like`,body,{
                headers:{
                    Authorization:window.localStorage.getItem("TokenApi-Labeddit")
                }})
                browserPost()
                props.browserPosts()
        } catch (error) {
            console.log(error)
        }
    }

    const insertNewComment = async () =>{
        try {          
            let body = {
                content,
            }
            await axios.post(`${BASE_URL}/posts/${context.urlPost}`,body,{
                headers:{
                    Authorization:window.localStorage.getItem("TokenApi-Labeddit")
                }})         
            setContent('')
            browserPost()
            props.browserPosts()
            } catch (error) {
            console.log(error)
        }
    }

    return(
        <>         
            <StyleContainerModal>
            <Header/>
                <StyleSection>
                    <div>
                        <article>
                            <p className="subText">Enviado por: {post && post?.creator?.username}</p>
                            <p>{post.content}</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <img src={like} onClick={()=>likePost(post.id)} alt="likeBotton"/>
                                    { post.likes}
                                    <img src={dislike} onClick={()=>dislikePost(post.id)} alt="dislikeBotton"/> 
                                </span> 
                                <span className="subText">
                                    <img src={comment} alt="commentBotton" />
                                    {post.comments}
                                </span>
                            </p>
                        </article>
                        <input value={content} onChange={(event)=>setContent(event.target.value)} className="InputPost" placeholder="Digite seu post..."/>
                        <button onClick={()=>{insertNewComment()}}>Responder</button>
                    </div>

                    <div>
                        {post && post?.comments_post?.map((comment)=>{return(
                        <article key={comment.id}>
                            <p className="subText">Enviado por: {comment.username}</p>
                            {console.log("creator",comment )}
                            <p>{comment.content}</p>
                            <p className="menuPost">
                                <span className="subTextBold">
                                    <img src={like} onClick={()=>likePost(comment.id)} alt="likeBotton"/>
                                    {comment.likes}
                                    <img src={dislike} onClick={()=>dislikePost(comment.id)} alt="dislikeBotton"/> 
                                </span> 
                            </p>
                        </article>
                        )})}
                    </div>
                </StyleSection>
            </StyleContainerModal>
        </>
    )
}

export default ModalPost