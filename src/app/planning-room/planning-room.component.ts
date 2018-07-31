import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanningSessionService } from '../services/planning-session.service';
import PlanningSession from '../models/planning-session';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  // selector: 'planning-room', no longer needed if routing is used. Use selector for nested components
  templateUrl: './planning-room.component.html',
  styleUrls: ['./planning-room.component.css']
})
export class PlanningRoomComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  public currentPlanningSession: any;

  constructor(
    private route: ActivatedRoute,
    private planningSessionService: PlanningSessionService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      /* Busca la planingSession seleccionada / A traves de currentPlanningSession se puede acceder a toda la información
        Ej. Los participantes pueden ser provistos como input de Voted-Cards component
      */
      this.planningSessionService.getCurrentPlanningSessionByKey(params['key'])
        .valueChanges()
        .subscribe((planningSession: PlanningSession) => {
          this.currentPlanningSession = planningSession;
        });
    });
  }

  updatePlanning() {
    /* Ejemplo de como actualizar una planning session, se manda solo lo que se va a actualizar */
    this.planningSessionService.updatePlanningSession('0', {
      allVoted: true
    });
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
