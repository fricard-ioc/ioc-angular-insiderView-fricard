1.	Descripció del projecte — 

2.	Mapa de rutes — 

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

3.	Instruccions d'execució en local:

git clone [url-repositori]

cd [nom-projecte]

npm install

ng serve

** Important: cal executar el servidor de dades amb
npx json-server db.json

# Obrir http://localhost:4200

4.	Build de producció — 
Per compilar l'aplicació:
ng build

Per obtenir estadístiques del bundle:
npm run build:stats

Per analitzar el bundle:
npx webpack-bundle-analyzer dist/ioc-angular-insider-view-fricard/stats.json

Mida aproximada del bundle:
Mida del bundle de producció obtinguda: 355.52 kB

5.	Credencials de prova — 
- **Email:** admin@test.com
- **Contrasenya:** 1234
