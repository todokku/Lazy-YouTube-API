// This is the id of the video you want to use.
// It should be from your channel or a channel you are authorised to manage.
export const VIDEO_ID = '<VIDEO_ID>'
// All the options below are optional if you are confused leave them as they are.
// ========================================           
// |       Entity      |   ENTITY_CODE    |
// |-------------------|------------------|
// |   View Count      |     <VIEW>       |
// |   Like Count      |     <LIKE>       |
// |   Dislike Count   |     <DISLIKE>    |
// |   Favorite Count  |    <FAVORITE>    |
// |   Comment Count   |     <COMMENT>    |
// ======================================== 
// If you want to change the title set CHANGE to true else set it to false.
// Edit the value attribute to configure this option.
// The video title will be updated to the format where all entity code is replaced
// with it's value
// For all entity code refer to the table above
export const TITLE = {
    CHANGE: true,
    VALUE: 'This video has <VIEW> views and <LIKE> likes'
};
// If you want to change the description set CHANGE to true else set it to false.
// Edit the value attribute to configure this option.
// The video description will be updated to the format where all entity code is replaced
// with it's value
// For all entity code refer to the table above
export const DESCRIPTION = {
    CHANGE: false,
    VALUE: ''
};

//-------------------------------------------------------------------
// Don't change any thing below unless you know what you are doing
//-------------------------------------------------------------------

// ========================================           
// |       Entity      |   ENTITY_CODE    |
// |-------------------|------------------|
// |   View Count      |     <VIEW>       |
// |   Like Count      |     <LIKE>       |
// |   Dislike Count   |     <DISLIKE>    |
// |   Favorite Count  |    <FAVORITE>    |
// |   Comment Count   |     <COMMENT>    |
// ======================================== 

export function fromatValue(value: string, statistics: { viewCount: any; likeCount: any; dislikeCount: any; favoriteCount: any; commentCount: any; }) {
    return value.split('<VIEW>').join(statistics.viewCount)
        .split('<LIKE>').join(statistics.likeCount)
        .split('<DISLIKE>').join(statistics.likeCount)
        .split('<FAVORITE>').join(statistics.likeCount)
        .split('<COMMENT>').join(statistics.likeCount);
};

export interface snippet {
    description?: string,
    title?: string,
    tags?: [],
    thumbnails?: {
        default: {
            height: number,
            width: number,
            url: string
        }
    },
    categoryId: number,
    defaultLanguage: string,
}
