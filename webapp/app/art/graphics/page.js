'use client';

import { useEffect, useState } from 'react';
import MyGallery from '@/components/Gallery';

import getArtContent from '@/components/getArtContent';

// React component
export default function Graphics() {
    const [content, setContent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const rel_path = '/imgs/art/graphics/content/';
            const data = await getArtContent(rel_path);
            setContent(data);
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col">
            {content &&
                content.map((part, index) => (
                    <div key={index}>
                        <MyGallery images={part.imgs} />
                    </div>
                ))}
        </div>
    );
}
