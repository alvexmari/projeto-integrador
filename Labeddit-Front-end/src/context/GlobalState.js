//import axios from "axios"
//import { BASE_URL } from "../constants/BASE_URL"
import { useState, useEffect } from "react"

function GlobalState(){

    const [posts, setPosts] = useState([])

    const [urlPost, setUrlPost] = useState('')

    const [loading, setLoading] = useState(false)

    const [modal, setModal] = useState(false)

    const [actionModal, setActionModal] = useState('')

    const [alertModal, setAlertModal] = useState(false)

    const [alertMessage, setAlertMessage] = useState('')

    return{
        posts, 
        setPosts,
        urlPost, 
        setUrlPost,
        loading, 
        setLoading,
        modal, 
        setModal,
        actionModal, 
        setActionModal,
        alertModal, 
        setAlertModal,
        alertMessage, 
        setAlertMessage
    }
}

export default GlobalState