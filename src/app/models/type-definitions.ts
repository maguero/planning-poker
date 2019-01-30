import { MatListIconCssMatStyler } from "@angular/material";

export class Participant {
    email: string;
    username?: string;

    constructor(email: string, username?: string | undefined) {
        this.email = email;
        this.username = username == undefined ? '' : username;
    };
}

export class StorySessionResponse {
    id: string;
    storyId: string;
    status: string;
    storyPoints: number;
    votes: Vote[];
    grommed: boolean;
}

export class StorySession {
    id: string;
    storyPoints: number;
    storyId: string;
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
    participants?: Participant[];
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
    votedCard?: number;
    userName?: string;

    constructor(email: string, username?: string | undefined) {
        this.email = email;
        this.userName = username == undefined ? email.split('@')[0] : username;
        this.votedCard = 0;
    };
}
