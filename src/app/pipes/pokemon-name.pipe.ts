// src/app/pipes/pokemon-name.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName'
})
export class PokemonNamePipe implements PipeTransform {

  transform(pokemon_entries: any, name: string) {
    if (!name) {
      return pokemon_entries;
    }

    return pokemon_entries.filter((item: any) => item.pokemon_species.name.includes(name));
  }
}
