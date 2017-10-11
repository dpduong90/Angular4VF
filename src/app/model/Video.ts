import { User } from './User'
import { Catelogory } from './Catelogory'

export class Video {
    videoId: number;
    videoUrl: string;
    title: string;
    description: string;
    staticThumbUrl: string;
    view: number;
    duration: number;
    uploaderId: number;
    createTs: number;
    targetPlaylist: number;
    shortUrl: String;
    subtitleLanguages: String[];
    tags: String[];
    subCategories: Catelogory[];
    userProfile: User;

    
}