import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ServiceService } from "../../service.service";

@Component({
  selector: 'pr-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}




