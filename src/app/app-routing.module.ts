import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterEditComponent } from './character/character-edit/character-edit.component';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { NewCharacterComponent } from './character/new-character/new-character.component';
import { FightComponent } from './fight/fight.component';

const routes: Routes = [
  {path: 'characters', component: CharacterListComponent},
  {path: 'new-character', component: NewCharacterComponent},
  {path: 'character/:id', component: CharacterEditComponent},
  {path: 'fight', component: FightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
