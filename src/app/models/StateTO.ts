module Models {
    export interface StateTO {
        session: Models.SessionTO;
        comments: CommentTO[];
        groups: GroupTO[];
        users: string[];
        tasks: Models.TaskTO[];
    }
}