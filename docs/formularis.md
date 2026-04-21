*Documentació dels formularis

**Validadors
  - Sincrons: S'ha utilitzat minLength(2) i maxLength(50) per controlar la longitud del text de cerca.
  - Asincrons: S'ha creat codiDisponibleValidator. Simula una consulta a l'API amb un timer(500). Si s'escriu "error", retorna l'error 'sensResultats' true. 
  En cas contrari, retorna null, indicant que el valor és vàlid.

**Debounce 
  - S'ha utilitzat el operador debounceTime(400) per evitar que la validació asincrona es dispari amb cada tecla pressionada. 
  Això millora el rendiment i també l'experiencia de l'usuari, ja que només es realitza la validació després de 400 mil·lisegons d'inactivitat.
