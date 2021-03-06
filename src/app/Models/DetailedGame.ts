export interface DetailedGame{
    background_img:string,
    poster_img:string,
    description:string,
    name:string,
    website:string,
    rating:string,
    playtime:string,
    reddit_url:string,
    tags:[{
        image_background:string,
        name:string
    }],
    screenshots:string[],
    genres:[{
        image_background:string,
        name:string,
        id:string
    }],
    trailer:string
}