import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import axios from 'axios'
import { sign, verify } from 'jsonwebtoken'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/github_authorize' , (req,res)=>{
    const client_id = process.env.GITHUB_CLIENT_ID
    return res.redirect(`https://github.com/login/oauth/authorize?client_id=${client_id}`)
})
//

app.get('/github_callback',(req, res)=>{
 const {code} = req.query
 
 if(code){
    const urlFrontend = process.env.BASE_URL_FRONTEND
     return res.redirect(`${urlFrontend}/codelogin?code=${code}`)
 }else{
    return res.json({error:'error'})
 }
})

app.post ('/authenticate' , async (req ,res) => {
    
    const {code} : {code:string} = req.body
    const url = 'https://github.com/login/oauth/access_token'

    let error = false
    let response1 
    try {
        response1 = await axios.post(url,null,{
            params:{
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code: code ? code : ''
            },
            headers:{
                'Accept': 'application/json'
            } 
        })    
    } catch (error) {
        error = true
    }

    const acess_token =  response1? response1.data.access_token : null

    if(acess_token){
        let response2 
        try {
            response2 = await axios.get<{id:string}>(
                'https://api.github.com/user',
                {
                    headers:{
                        authorization:`Bearer ${acess_token}`
                }
            })
            
        } catch (error) {
            error = true
        }

        if(!error){
            if(response2?.data.id){
                const token : string = sign({
                    id: response2.data.id
                    },
                    process.env.JWT_SECRET || '',
                    {expiresIn:'1d'}
                ) 
                return res.json({token})

            }
        }else{
            
            return res.status(401).json({token:false})
        }
               
    }else{

        return res.status(401).json({token:false})
    }
})

app.post('/createtoken', (req, res) => {
    const name = req.body.name
    const token : string = sign({
        id: name
        },
        process.env.JWT_SECRET || '',
        {expiresIn:'5m'}
    )
    return res.json({token})

})

app.post('/verifyToken', (req, res) => {
    const token : string = req.body.token
    // const token : string = 'fdsfgds'
    
    let tokenStatus : boolean 
    try {
        const secret = process.env.JWT_SECRET ? process.env.JWT_SECRET : ''
        verify(token ,secret)

        tokenStatus = true

    } catch (error) {
        tokenStatus = false
    }
    if (tokenStatus){
        return res.json({tokenStatus}) 

    }else{
        return res.json({tokenStatus})  


    }
})

export default app