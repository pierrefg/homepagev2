import { photoData } from './content/data';

import Gallery from '@/components/gallery/Gallery';

export default function Photography() {
    return (
        <div className="flex flex-col w-full">
            {
                photoData.map(
                    (graphicsSection, index) => (
                        <div key={index} className='pb-8'>
                            <Gallery galleryData={graphicsSection} />
                        </div>                        
                    )
                )
            }
        </div>
    );
}