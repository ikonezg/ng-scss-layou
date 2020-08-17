import { Component, OnInit } from '@angular/core';
import { faDragon, faDiceD20, faJedi, faHatWizard, faSkating, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  faDragon = faDragon;
  faJedi = faJedi;
  faHatWizard = faHatWizard;
  faSkating = faSkating;
  faSkullCrossbones = faSkullCrossbones;
  faDiceD20 = faDiceD20;

  constructor() { }

  ngOnInit(): void {

  }

}
