import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { StoriesService } from '../services/stories.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent {

  public stories;
  uid: string;

  constructor(
    private storiesService: StoriesService,
    private userService: UserService) {
    this.login();
    this.getStoryList();
  }

  login() {
    this.userService.anonymousLogin().then((u) => { console.log(JSON.stringify(u)); this.uid = u.uid; });
  }
  getStoryList() {
    this.stories = this.storiesService.getStoryList();
  }
  updateStory(story: any) {
    this.storiesService.updateItem(story.key, story.points);
  }
}

