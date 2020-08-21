export default class Pokemon {
    constructor(data) {
        this.name = data.name;                          // Nombre del pokemon
        this.id = data.id;                              // Id del pokemon
        this.pkm_front = data.sprites.front_default;    // Pokemon de frente
        this.pkm_back = data.sprites.back_default;      // Pokemon de espaldas
        this.pkm_type = data.types;                     // Tipo del pokemon (Devuelve un array)
    }
}