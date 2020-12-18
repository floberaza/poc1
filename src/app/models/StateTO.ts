module Models {
    export interface StateTO {
        session: Models.SessionTO;
        comments: CommentTO[];
        groups: string[];
        users: string[];
        tasks: Models.TaskTO[];
    }
}