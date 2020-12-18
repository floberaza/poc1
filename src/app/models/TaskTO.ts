module Models {
    export interface TaskTO {
        name: string;
        id: string;
        group: string;
        owner: string;
        isComplete: boolean;
    }
}