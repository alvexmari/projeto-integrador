import { UserDatabase } from "../database/UserDatabase";
import { User } from "../models/User";
import { TokenPayload, ROLE_USER } from "../types";
import { SignUpDTO, LoginDTO,GetAllUsersInputDTO } from "../dtos/UserDTO";
import { HashManager } from "../services/HashManager";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
export class UserBusiness{
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager,
        private hashManager: HashManager
    ){}
    
    public async getAllUsers(input: GetAllUsersInputDTO){

        const {q, token} = input
        
        if(typeof token !== "string"){
            throw new BadRequestError("'Token' precisa ser informado!")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload === null){
            throw new BadRequestError("'Token' não é válido!")
        }

        if(payload.role !== ROLE_USER.ADMIN ){
            throw new BadRequestError('Acesso negado!')
        }

        console.log(payload)

        const usersDB = await this.userDatabase.getAllUsers()

        const users = 
        usersDB.map((userDB)=>{ 
            const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role,
            userDB.created_at,       
        )
        
        return user.toDBModel()
    })

        return users
    }

    public async signUp(input: SignUpDTO){
        const {name,email,password} = input

        const id = this.idGenerator.generate()

        const passwordHash = await this.hashManager.hash(password)
        
        const created_at = (new Date()).toISOString()

        const filterUserbyEmail = await this.userDatabase.getUserByEmail(email)

        if(filterUserbyEmail){
            throw new BadRequestError("'E-mail' já cadastrado!.")
        }

        if(typeof name !== "string"){
            throw new BadRequestError("'Name' precisa ser uma string.")
        }

        if(typeof email !== "string"){
            throw new BadRequestError("'E-mail' precisa ser uma string.")
        }

        if(typeof password !== "string"){
            throw new BadRequestError("'Password' precisa ser uma string.")
        }

        const newUser = new User(
            id,
            name,
            email,
            passwordHash,
            ROLE_USER.NORMAL,
            created_at,
        )

        const tokenPayload: TokenPayload = {
            id: newUser.getId(),
            name: newUser.getName(),
            role: newUser.getRole()
        }
        
        const token = this.tokenManager.createToken(tokenPayload)
        const newUserDB = newUser.toDBModel()
        await this.userDatabase.signUp(newUserDB)

        const output={
            message: "Usuário cadastrado com sucesso",
            token,
        }

        return output
    }

    public async login(input:LoginDTO ){
        const {email, password} = input

        if(typeof email !== "string"){        
            throw new BadRequestError("'E-mail' precisa ser uma string.")
        }

        if(password === undefined){            
            throw new BadRequestError("Inserir 'password'")
        }

        const searchUserByLogin = await this.userDatabase.getUserByEmail(email)

        if(!searchUserByLogin){
            throw new NotFoundError("'E-mail' não cadastrado!")
        }

        const passwordHash = await this.hashManager.compare(password, searchUserByLogin.password)

        if(!passwordHash){
            console.log("busca", searchUserByLogin.password)
            console.log("pass", password)
            console.log("Hash", passwordHash)
            throw new BadRequestError("'e-mail' ou 'senha' inválidos") 
        }

        if(searchUserByLogin){

            const userLogin = new User(
                searchUserByLogin.id,
                searchUserByLogin.name,
                searchUserByLogin.email,
                searchUserByLogin.password,
                searchUserByLogin.role,
                searchUserByLogin.created_at,
            )

            const tokenPayload: TokenPayload = {
                id: userLogin.getId(),
                name: userLogin.getName(),
                role: userLogin.getRole()
            }
            
            const token = this.tokenManager.createToken(tokenPayload)

            const output = {message:"Login realizado com sucesso", token}
            return output
        }
        else{
            const output = {message:"Login não realizado!", token: ''}
            return output
        }  
    }
}