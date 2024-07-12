import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const clip = [
    {
        "title": "Video 1",
        "desc": "Description for video 1",
        "url": "https://youtu.be/iQtm7-p2pVI?si=NMABio-nAgwrUAoe"
    },
    {
        "title": "Video 2",
        "desc": "Part of “Honkai: Star Rail - The Flapper Sinthome (Part 2)” Original Game Soundtrack",
        "url": "https://youtu.be/3vDNylR2FD4?si=H-lmAHZzoSY42qB9"
    },
    {
        "title": "Video 3",
        "desc": "This is not the official audio. It's a re-creation made by me. Music by Go Shiina and Yuki Kajiura. Arranged, orchestrated, and produced by Diego Mitre. Do not re-upload on any platforms. Do not make remixes using my audio files. You are only allowed to use my arrangements as background music, in which cases make sure to credit my YouTube channel in your description.",
        "url": "https://youtu.be/wBXrNikQAI8?si=T8cwWrG0lZbZ_Q8v"
    },
    {
        "title": "Video 4",
        "desc": "Music by Fate/stay night composed by Kawai Kenji Anime: Fate/stay night (2006) Picture by tlb1212",
        "url": "https://youtu.be/ZKCCs9DNEJs?si=ZDonTv41_jzLLrx4"
    },
    {
        "title": "Video 5",
        "desc": "Khó Vẽ Nụ Cười ( Htrol Remix ) ĐạtG x DuUyên | Nhạc gây nghiện 2019 Composer: Đạt G. Arrangement: Minh Thuy Recording, Mix & mastered: M’Acoustic Studio",
        "url": "https://youtu.be/E4uSPqpq0IA?si=XtX4gIBtVlwp1naJ"
    }
]

const video = () => {
    const convertToEmbedUrl = (url) => url.replace("youtu.be/", "youtube.com/embed/").split('?')[0];
    return (
        <div className='pt-5 container mx-auto text-center'>
            <h1 className='font-bold text-blue-800'>My clip</h1>
            <div className="mt-5 flex justify-center">
                <iframe
                    width="560"
                    height="315"
                    src={convertToEmbedUrl(clip[0].url)}
                    title={clip[0].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-10">
                {clip.slice(1, 5).map((video, index) => (
                    <div key={index} className="p-4">
                        <iframe
                            width="100%"
                            height="300"
                            src={convertToEmbedUrl(video.url)}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="flex items-center justify-between mt-2">
                            <h2 className="font-bold text-lg">{video.title}</h2>
                            <div className="flex items-center">
                                {[...Array(3)].map((_, i) => (
                                    <StarIcon key={i} className="size-7 text-yellow-500" />
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-700 mt-1">{video.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default video