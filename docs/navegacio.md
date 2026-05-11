# Navegació i Configuració de Rutes

## Mapa de Rutes

| Path | Component | Accés | Descripció |
| --- | --- | --- | --- |
| `/` | -> /cataleg | Públic | Redirixeixen al catàleg |
| `/cataleg` | `CatalegComponent` | Públic | Catàleg principal de les empreses |
| `/cerca` | `CercaComponent` | Públic | Pàgina per cercar empreses |
| `/detall/:id` | `DetallComponent` | Públic | Mostra els detalls d'una empresa amb el parametre `:id` que s'obté amb `ActivatedRoute` |
| `/preferits` | `PreferitsComponent` | Privat | Llista d'empreses preferides |
| `/login` | `LoginComponent` | Públic | Login de sessió |
| `**` (Wildcard) | -> /cataleg | Públic | Redirixeixen al catàleg les rutes no reconegudes |
| --- | --- | --- | --- |


## Configuració

- `provideRouter`: Es declaran les rutes a redireccionar a `app.config.ts` mitjançant `provideRouter(routes)`.
- `RouterOutlet`: S'ha afegit al component principal amb `<router-outlet></router-outlet>` perque Angular el renderitzi.
- `RouterLink`: S'ha fet servir el NavComponent crear la barra de navegació amb `<a routerLink="/ruta">Enllaç</a>` per navegar entre les diferents vistes.
- `RouterLinkActive`:  Ens dona context de quina ruta està activa per aplicar estils CSS.
