
export class Paticipants {
    email: string;
    username: string;
}

export class StoriesSessionResponse {
    id: string;
    storyId: string;
    status: string;
    storyPoints: number;
}

export class StoriesSession {
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
    participants?: Paticipants[];
    storySessions?: StoriesSessionResponse[];
}

export const STORY_SESSION_STATUS = {
    'NEW': 'new',
    'ACTIVE': 'active',
    'COMPLETE': 'complete'
}

