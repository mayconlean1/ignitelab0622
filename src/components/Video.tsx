import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import ReactPlayer from "react-player";

import { useGetLessonBySlugQuery } from "../graphql/generated";

interface VideoProps{
    lessonSlug: string
    stateToogleList: [boolean, (newState:boolean)=>void]
}
  
export function Video (props: VideoProps){
    const [toogleState, setToogleList] = props.stateToogleList 

    const { data } = useGetLessonBySlugQuery({
        variables:{
            slug: props.lessonSlug
        },
        fetchPolicy:'no-cache'
    })
    
    if (!data || !data.lesson){
        return (
            <div className="flex-1">
                <p>Carregando...</p>
            </div>
        )
    }

    return(
        <div className={`${toogleState? '':'smmax750:hidden'} flex-1`}>
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px]  min450:max-h-[60vh] aspect-video ">

                <ReactPlayer url={`https://www.youtube.com/watch?v=${data.lesson.videoId}`} width='100%' height='100%'/>

                </div>
            </div>

            <div className="min450:p-8 p-4 max-w-[1100px] mx-auto  smmax450:text-xs " >
                <div className="flex lg:flex-col items-start gap-16">
                    <div className="flex-1  ">
                        <h1 className="text-2xl font-bold">
                            {data.lesson.title}
                        </h1>
                        <p className=" mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>

                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6 ">
                                <img 
                                    className="h-16 w-16 rounded-full border-2 border-blue-500"
                                    src={data.lesson.teacher.avatarURL} 
                                    alt="" 
                                />
                                
                                <div className="leading-relaxed">
                                    <strong className="smmax450:text-lg font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                    <span className="smmax450:text-xs text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="lg:w-full">
                        <div className="flex flex-col gap-4">
                            <a href="" className="p-4 text-small bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                                <DiscordLogo size={24}/>
                                Comunidade do Discord
                            </a>

                            <a href="" className="p-4 text-small border text-blue-500 border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                                <Lightning size={24}/>
                                Acesse o desafio
                            </a>
                        </div>
                    </div>
                </div>
                <div className="gap-8 mt-20 grid grid-cols-2 smmax750:flex smmax750:flex-col">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-600 h-full p-6 flex items-center">
                            <FileArrowDown size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl smmax450:text-lg">Material Complementar </strong>
                            <p className="text-sm smmax450:text-xs text-gray-200 mt-2">
                                Acesse o mateiral complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>
                        </div>
                    </a>

                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-600 h-full p-6 flex items-center">
                            <FileArrowDown size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl smmax450:text-lg">Wallpapers exclusivos </strong>
                            <p className="text-sm smmax450:text-xs text-gray-200 mt-2">
                                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>
                        </div>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}