import { gql, useMutation } from "@apollo/client";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Icon";
import {IconReact} from "../components/IconReact"
import { useCreateSubscriberMutation } from "../graphql/generated";
import axios from 'axios'
import { GithubLogo } from "phosphor-react";

export function Subscribe(){
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, {loading}] = useCreateSubscriberMutation()

    function loginGithub(){
        window.location.href = 'http://localhost:3001/github_authorize'
    }

    async function handleSubscibe(event: FormEvent){
        event.preventDefault()

        await createSubscriber({
            variables:{
                name,
                email
            }
        })
        navigate('/event')
    }

    useEffect(() => {
        if(localStorage.getItem('token') !== ''){
            navigate('/event')
        }
    })

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
             <div className="absolute">
                <IconReact />
            </div> 
            <div className="w-full md:flex-col xl:max-w-[767px] max-w-[1100px] justify-between flex items-center md:mt-10 mt-20 mx-auto">
                <div className="md:max-w-[312px] xl:max-w-[400px] max-w-[640px]">
                    <div className="w-full md:flex  md:justify-center">
                        <Logo />

                    </div>

                    <h1 className="md:text-center md:text-[1.9rem] md:mt-6 mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p  className="md:text-center md:mb-4 md:text-[1rem] mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Increva-se gratuitamente</strong>
                    <form onSubmit={handleSubscibe} className="flex flex-col gap-2 w-full">
                        <input
                            onChange={event=> setName(event.target.value)}
                            className="bg-gray-900 rounded px-5 h-14" 
                            type="text" 
                            placeholder="Seu nome completo" 
                        />
                        <input
                            onChange={event=> setEmail(event.target.value)}
                            className="bg-gray-900 rounded px-5 h-14" 
                            type="email" 
                            placeholder="Digite seu e-mail" 
                        />

                        <button 
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                        <button 
                            type="button"
                            onClick={loginGithub}
                            className="mt-4 text-black bg-gray-200 uppercase py-4 rounded font-bold text-sm hover:bg-blue-500 transition-colors disabled:opacity-50 flex item-center justify-center gap-1 border-blue-500 border-2"
                        >
                            <GithubLogo size={24} /> Entrar com github
                        </button>

                    </form>
                </div>
            </div>
            
            <img src="/src/assets/ssblur.png" className="mt-10" alt="" />
        </div>
    )
}