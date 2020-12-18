module Models {
    export interface CommentTO {
        owner?: string;
        id?: string;
        task?: TaskTO;
        content?: string;
    }
}