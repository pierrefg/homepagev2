// 'use client';

import { graphicsData } from './content/data';

import Gallery from '@/components/gallery/Gallery';

// React component
export default function Graphics() {
    return (
        <div className="flex flex-col w-full">
            {
                graphicsData.map(
                    (graphicsSection, index) => (
                        <div key={index}>
                            <Gallery galleryData={graphicsSection} />
                        </div>                        
                    )
                )
            }
        </div>
    );
}
