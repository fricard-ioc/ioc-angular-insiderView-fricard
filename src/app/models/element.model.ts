export interface ElementApiResponse {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatge: string;
  popular: boolean;
  stock: number;

  ticker: string;
  moneda: string;
  activitat_recent: boolean;
}

export interface ElementCataleg {
  id: string;
  titol: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatgeUrl: string;
  esPopular: boolean;
  unitats: number; 

  ticker: string;
  moneda: string;
  activitatRecent: boolean;
}
