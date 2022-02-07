import { theme } from "../global/theme";
import { PokemonDTO } from "../services/api";

export interface ColorsProps {
  primary:string,
  secondary:string
}

export function getColors (item:PokemonDTO): ColorsProps {
  switch (item.types[0].type.name) {
    case 'grass':
      return {
        primary: theme.colors.elements.grass.primary,
        secondary: theme.colors.elements.grass.secondary,
      }
    case 'water':
      return{
        primary: theme.colors.elements.water.primary,
        secondary: theme.colors.elements.water.secondary,
      }
    case 'fire':
      return{
        primary: theme.colors.elements.fire.primary,
        secondary: theme.colors.elements.fire.secondary,
      };
    case 'electric':
      return{
        primary: theme.colors.elements.electric.primary,
        secondary: theme.colors.elements.electric.secondary,
      };
    default:
      return{
        primary: theme.colors.elements.grass.primary,
        secondary: theme.colors.elements.grass.secondary,
      };
  }
}