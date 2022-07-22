import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { Effects, Spell } from '../spell.dto';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {
  post: any = {};

  public form: FormGroup = this.formBuilder.group({
    'name': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    'avatar': [null],
    'hp': [null, [Validators.required, Validators.min(5)]],
    'prana': [null, [Validators.required]],
    'pa': [null, [Validators.required, Validators.max(20)]],
    'isServant': [null, [Validators.required]]
  });

  public effects = Object.values(Effects).filter(value => typeof value === 'string');

  public spells: Spell[] = []

  public character: Character = {
    avatar: '',
    name: '',
    hp : 0,
    pa: 0,
    prana: 0,
    isServant: false,
    spells: this.spells
  };

  submitted = false;
  constructor(
    private router: Router,
    private characterService: CharacterService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    
  }

  async onSubmit(character: any) {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    character.spells = this.spells
    console.log(this.spells)
    console.log(character)
    this.characterService.create(character).subscribe();
  }

  addSpell() {
    let spell:Spell = {
      name: 'NewSpell',
      cooldown: 0,
      damage:'',
      prana: 0,
      pa: 0,
      effect: 1,
      passive: false
    }
    this.spells.push(spell)
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
    this.router.navigateByUrl('/characters');
  }

}
