import { Component, OnInit } from '@angular/core';
import { Proverb } from '../proverb';

@Component({
  selector: 'app-proverb',
  templateUrl: './proverb.component.html',
  styleUrls: ['./proverb.component.css']
})
export class ProverbComponent implements OnInit {
  proverbs:Proverb[] =[
    new Proverb(1,'If you want to live a happy life, tie it to a goal. Not to people or things.','Paulo','Coelho',new Date(2020,11,1)),
    new Proverb (2,'The happiest people don’t have the best of everything, they just make the best of everything.','Brigitte','Nicole',new Date(2020,11,1),),
    new Proverb(3,'TIf you want to live a happy life, tie it to a goal. Not to people or things.','Albert','Einstain',new Date(2020,11,1)),
    new Proverb(4,'At some point, you have to realize that some people can stay in your heart but not in your life.','Daniel','Smith',new Date(2020,11,1)),
  ];
  addNewProverb(proverb){
    let proverbLength = this.proverbs.length;
    proverb.id = proverbLength+1;
    proverb.fullDate = new Date(proverb.fullDate)
    this.proverbs.push(proverb)
  }
  toggleInfo(index){
    this.proverbs[index].ShowAuteur=!this.proverbs[index].ShowAuteur;
  }
 
  proverbDelete(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Do you really want to Delete this quote??: ${this.proverbs[index].nom}?`);

      if (toDelete){
        this.proverbs.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}


