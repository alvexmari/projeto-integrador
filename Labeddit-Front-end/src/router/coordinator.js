export const goToLoginPage = (navigate)=>{
    navigate("/")
}

export const goToSignUpPage = (navigate)=>{
    navigate("/signup")
}

export const goToHomePage = (navigate)=>{
    navigate("/main")
}

export const goToPostPage = (navigate, post)=>{
    navigate(`/posts/${post}`)
}