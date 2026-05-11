export interface ElementApiResponse {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatge: string;
  popular: boolean;
  stock: number;

  // Camps propis i retrocompatiblitat
  ticker: string;
  moneda: string;
  activitatRecent?: boolean;
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

  // Camps propis i retrocompatiblitat
  ticker: string;
  moneda: string;
  activitatRecent?: boolean;
}
