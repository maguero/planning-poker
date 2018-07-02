import { IBacklogItem, IPaticipants, IStoriesSession } from '../models/type-definitions'

export default class PlanningSession {
    id?: string;
    allVoted?: boolean;
    backlog?: Array<IBacklogItem>;
    participants?: Array<IPaticipants>;
    storiesSession?: Array<IStoriesSession>;
}



