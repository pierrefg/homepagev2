import { photoData } from './content/data';

import Gallery from '@/components/gallery/Gallery';

export default function Graphics() {
    return (
        <div className="flex flex-col w-full">
            {
                photoData.map(
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