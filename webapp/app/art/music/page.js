import PlaylistPlayer from "@/components/audioPlayer/PlaylistPlayer";

import { perceptionData } from './content/perception';

export default function Music() {
    return (
        <div className="flex flex-col gap-6">
            <PlaylistPlayer playlist={perceptionData} />
        </div>
    );
}