
export class Participants {
    email: string;
    username: string;
}

export class StorySessionResponse {
    id: string;
    storyId: string;
    status: string;
    storyPoints: number;
    votes: Vote[];
}

export class StorySession {
    id: string;
    storyPoints: number;
    story?: Story;
    status: string;
}

export class Story {
    id: string;
    detail: string;
    title: string;
    description: string;
}

export class User {
    userName: string;
    email: string;

}

export class PlanningSessionResponse {
    id?: string;
    key?: string;
    name: string;
    allVoted?: boolean;
    backlog?: Story[];
    participants?: Participants[];
    storySessions?: StorySessionResponse[];
}

export enum StorySessionStatus {
    'NEW' = 'NEW',
    'ACTIVE' = 'ACTIVE',
    'ACTIVE_GROMMED' = 'ACTIVE_GROMMED',
    'COMPLETE' = 'COMPLETE'
}


export class Vote {
    email: string;
    votedCard: number
}
