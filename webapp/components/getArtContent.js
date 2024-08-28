'use server';

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Function to list files in a directory
function listFilesInDirectory(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    return files.map(file => ({
        fullpath: path.join(directoryPath, file),
        name: file,
    }));
}

// Async function to get image content and metadata
export default async function getArtContent(rel_path) {
    const base_path = 'public'; // No leading slash for the base path
    const search_path = path.join(base_path, rel_path);
    const folders = listFilesInDirectory(search_path);

    const content = [];

    for (const folder of folders) {
        const imgs = listFilesInDirectory(folder.fullpath);
        const imgs_object = [];

        for (const img of imgs) {
            const image = sharp(img.fullpath);
            const metadata = await image.metadata();
            imgs_object.push({
                path: `${rel_path}${folder.name}/${img.name}`,
                width: metadata.width,
                height: metadata.height,
            });
        }

        content.push({
            imgs: imgs_object,
        });
    }

    return content;
}