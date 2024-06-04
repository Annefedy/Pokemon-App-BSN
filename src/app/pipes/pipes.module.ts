// src/app/pipes/pipes.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonNamePipe } from './pokemon-name.pipe';

@NgModule({
  declarations: [PokemonNamePipe],
  imports: [CommonModule],
  exports: [PokemonNamePipe]
})
export class PipesModule {}
