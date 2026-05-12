## 1. Ús de l'OnPush

Els components amb OnPush son:
`TargetaElementComponent` i `LlistaElementsComponent`

**Per què els he triat?**
Doncs bàsicament perquè a l'enunciat demanava posar-ho en components "presentacionals". 
Aquests dos serveixen només per pintar coses per pantalla. Reben la informació des de fora 
a través de l'`@Input()` i ja està, per dins no fan res estrany ni peticions de dades. Posant 
l'OnPush fem que l'Angular no es ratlli comprovant tota l'estona si hi ha hagut canvis a la 
vista; només s'actualitza si li passem unes dades totalment noves. Així ens estalviem recursos 
i l'aplicació va més ràpida.

## 2. Configuració del Virtual Scroll

Hem fet servir el `ScrollingModule` per carregar dinàmicament les targetes quan baixem la 
pàgina. Útil quan tenim molts elements a mostrar, perquè no cal carregar-los tots alhora.

*** Configuració de la virtualització ** 

- Mida de l'element (itemSize): Li he posat un valor de `220`. Més o menys la targeta de 
l'empresa fa 200px d'alt amb el CSS que he fet, i li he sumat 20px de marge.

- Nombre d'elements: A l'arxiu `db.json` he posat 50 elements. Com a l'enunciat demanava 
un mínim de 50 per provar que l'scroll funciona bé, he anat creant empreses d'exemple fins 
a tenir-ne 50 perquè es noti bé com va amagant i mostrant les targetes segons baixes.

## Informació addicional: 
*** És important recordar que per carregar l'arxiu db.json amb les dades de les empreses, 
cal tenir el servidor de json-server en marxa.***
