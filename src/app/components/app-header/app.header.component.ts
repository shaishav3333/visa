import { Component } from '@angular/core';

@Component({
  selector: 'app-header-comp',
  templateUrl: './app.header.component.html',
  styleUrls: ['./app.header.component.css']
})
export class HeaderComponent {
    selectedIndex: number = 0;
    animationLeftPosition: string = '55px';
 constructor(){
 }

 onMenuChange(e, index){
     e.stopPropagation();
    this.selectedIndex = index;
    const childBoundaries = e.target.parentElement.getBoundingClientRect();
    const parentBoundaries =  e.target.parentElement.parentElement.getBoundingClientRect();
    this.animationLeftPosition = (childBoundaries.x - parentBoundaries.x) + childBoundaries.width /2 - 15 + 'px';
 }
}
