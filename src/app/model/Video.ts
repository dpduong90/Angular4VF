import { User } from './User'
import { Catelogory } from './Catelogory'

export class Video {
    constructor(
        public videoId: number,
        public videoUrl: string,
        public title: string,
        public description: string,
        public staticThumbUrl: string,
        public view: number,
        public duration: number,
        public uploaderId: number,
        public createTs: number,
        public targetPlaylist: number,
        public shortUrl: String,
        public subtitleLanguages: String[],
        public tags: String[],
        public subCategories: Catelogory[],
        public userProfile: User, ) {}
    
}