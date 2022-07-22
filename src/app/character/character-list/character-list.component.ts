import { Component, HostListener, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  selectedTabs: number[] = [];
  breakpoint: number = 0;
  rowHeight: string = '1:1';
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService
      .findAll()
      .subscribe((data) => [(this.characters = data)]);
    console.log(window.innerWidth)
    
    if (window.innerWidth <= 529) {
      this.breakpoint = 1;
      this.rowHeight = '1:1.2';
    } else if (window.innerWidth <= 657) {
      this.breakpoint = 1;
      this.rowHeight = '1:1.1';
    } else if (window.innerWidth <= 700) {
      this.breakpoint = 1;
      this.rowHeight = '1:1';
    } else if (window.innerWidth <= 850) {
      this.breakpoint = 1;
      this.rowHeight = '1:0.9';
    } else if (window.innerWidth <= 1080) {
      this.breakpoint = 1;
      this.rowHeight = '1:0.75';
    } else if (window.innerWidth <= 1669) {
      this.breakpoint = 1;
      this.rowHeight = '1:0.6';
    } else if (window.innerWidth <= 2526) {
      this.breakpoint = 2;
      this.rowHeight = '1:1';
    } else {
      this.breakpoint = 3;
      this.rowHeight = '1:1';
    }
  }

  delete(character: Character) {
    if (character._id) this.characterService.delete(character._id).subscribe();
    let index = this.characters.findIndex((c) => c._id == character._id);
    this.characters.splice(index, 1);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 529) {
      this.breakpoint = 1;
      this.rowHeight = '1:1.2';
    } else if (window.innerWidth <= 657) {
      this.breakpoint = 1;
      this.rowHeight = '1:1.1';
    } else if (window.innerWidth <= 700) {
      this.breakpoint = 1;
      this.rowHeight = '1:1';
    } else if (window.innerWidth <= 850) {
      this.breakpoint = 1;
      this.rowHeight = '1:0.9';
    } else if (window.innerWidth <= 1080) {
      this.breakpoint = 1;
      this.rowHeight = '1:0.75';
    } else if (window.innerWidth <= 1669) {
      this.breakpoint = 1;
      this.rowHeight = '1:0.6';
    } else if (window.innerWidth <= 2526) {
      this.breakpoint = 2;
      this.rowHeight = '1:1';
    } else {
      this.breakpoint = 3;
      this.rowHeight = '1:1';
    }
  }
}
