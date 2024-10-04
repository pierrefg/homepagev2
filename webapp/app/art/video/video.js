'use client';

import SimpleLink from "@/components/SimpleLink";

const videoData = [
    {
        type: 'Clip musical',
        title: 'Forbidden Fruit par Lori Pearlson (feat. Lea FM)',
        year: 2020,
        link: 'https://www.youtube.com/watch?v=MjLQH9F9fXs'
    },
    {
        type: 'Court métrage',
        title: 'La Petite Omelette',
        year: 2019,
        link: 'https://www.youtube.com/watch?v=YuKHhfBkRyA'
    },
    {
        type: 'After movie',
        title: 'WEIFA',
        year: 2019,
        link: 'https://www.youtube.com/watch?v=6bVek6l4Giw'
    },
    {
        type: 'After movie',
        title: 'IF50',
        year: 2019,
        link: 'https://www.youtube.com/watch?v=xhrxCQEs32E'
    },
    {
        type: 'Rapport',
        title: 'Rapport de stage de deuxième année (lauréat du prix Gaston Berger)',
        year: 2016,
        link: 'https://www.youtube.com/watch?v=RzpSbEcSk-A'
    },
    {
        type: 'Clip musical',
        title: 'My Queen par Universal Mind',
        year: 2015,
        link: 'https://www.youtube.com/watch?v=YqZEP1rHAII'
    },
    {
        type: 'Rapport',
        title: 'TPE (Travaux Pratiques Encadrés)',
        year: 2013,
        link: 'https://www.youtube.com/watch?v=81QvlGe7Ga4&t=278s'
    },
    {
        type: 'Court métrage',
        title: 'Le Labyrinthe',
        year: 2013,
        link: 'https://www.youtube.com/watch?v=K-DaBf7izT0'
    },
    {
        type: 'Court métrage',
        title: 'Op.15 n°7',
        year: 2013,
        link: 'https://www.youtube.com/watch?v=tTA_3U4B0JE'
    },
    {
        type: 'Court métrage',
        title: "L'invention",
        year: 2012,
        link: 'https://www.youtube.com/watch?v=qRPdk6Llqes'
    },
]

export default function Video() {
    return (
        <div className="flex flex-col gap-2 mx-auto">
            {
                videoData.map(
                    (item, index) => (
                        <div key={index}>
                            {item.year} - [{item.type}] - <i>{item.title}</i><> </>
                            <a
                                href={item.link} 
                                className="btn btn-secondary" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Voir
                            </a>
                        </div>
                    )
                )
            }
        </div>
    );
}