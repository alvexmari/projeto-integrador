import express from "express";
import { IdGenerator } from "../services/IdGenerator";
import { PostController } from "../controller/PostController";
import { TokenManager } from "../services/TokenManager";
import { UserDatabase } from "../database/UserDatabase";
import { PostDTO } from "../dtos/PostDTO";
import { PostDatabase } from "../database/PostDatabase";
import { PostBusiness } from "../business/PostBusiness";
export const postRouter = express.Router()

const postController = new PostController(

    new PostBusiness(
        new PostDatabase(),
        new UserDatabase(),
        new IdGenerator(),
        new TokenManager()      
    ),
    new PostDTO())

postRouter.get("/", postController.getPosts)
postRouter.get("/:id", postController.getPostsbyId)
postRouter.post("/", postController.insertNewPost)
postRouter.post("/:id", postController.insertNewComment)
postRouter.put("/:id", postController.updatePost)
postRouter.delete("/:id", postController.deletePost)
postRouter.put("/:id/like", postController.likeDislike)