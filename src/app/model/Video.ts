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
    constructor(userProfile: User, subCategories: Catelogory[]) {
        this.userProfile = userProfile;
        this.subCategories = subCategories;
    }
    
}