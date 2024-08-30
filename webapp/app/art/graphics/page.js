// 'use client';

import { graphicsData } from './content/data';

import Gallery from '@/components/Gallery'

// React component
export default function Graphics() {
    return (
        <div className="flex flex-col gap-8">
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
