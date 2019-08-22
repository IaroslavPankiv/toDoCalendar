import { Component, OnInit } from '@angular/core';
import {DataServise} from "../shared/data.servise";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor(private dataServise: DataServise) { }


  go(dir: number){
    this.dataServise.chengeMounth(dir)
  }



  ngOnInit() {

  }

}
