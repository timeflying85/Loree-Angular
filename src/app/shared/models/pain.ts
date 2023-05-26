export interface PainDTO {
 // allergenes: import("c:/Formation Java 2020/Angular-Loree/Loree/src/app/shared/models/allergene").Allergene[];
  id: number;
  nom: string;
  description: string;
  prix: string;
  ingredients: IngredientDTO[];
  imagePain: ImageDTO
}

export interface ImageDTO {
  id: number;
  cheminImage: string
}

export interface IngredientDTO {
  id: number;
  nom: string;
  description: string;
  allergenes: AllergeneDTO[]
}

export interface AllergeneDTO {
  id: number;
  nom: string;
  logo: string;
}

export interface PainCreate{
  id: number;
  nom: string;
  prix: string;
  description: string;
  ingredients: IngredientDTO[]
}
