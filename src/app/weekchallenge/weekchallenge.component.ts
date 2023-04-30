import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeekchallengeService } from '../services/weekchallenge.service';

@Component({
  selector: 'app-weekchallenge',
  templateUrl: './weekchallenge.component.html',
  styleUrls: ['./weekchallenge.component.scss']
})
export class WeekchallengeComponent {


  constructor(private router: Router, private weekchallengeservice: WeekchallengeService) {}

  onSubscribe() {

    alert('Subscribed');
  }

}
