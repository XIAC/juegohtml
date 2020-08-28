Quintus.PersonajeGUI = function (Q) {
  Q.tipoPersonaje = {
    mario: {
      asset: "mario150.png",
      vx: -50,
    },
    luigi: {
      asset: "Luigi50x50.png",
      vx: -10,
    },
    princesa: {
      asset: "princesa100x100.png",
      vx: -25,
    },
  };
  //MI PERSONAJE
  Q.Sprite.extend("Mario", {
    init: function (p) {
      this._super(p, {
        // asset: "mario150.png",
        type: Q.SPRITE_MARIO,
        collisionMask: Q.SPRITE_BALAS | Q.SPRITE_HONGOS,
        // vx: -50,
      });
      this.add("2d");
    },
    step: function (dt) {
      // console.log(this.p);
      if (this.p.x <= 150) {
        this.destroy();
        console.log("Mario esta huyendo");
        Q.stageScene("nivel1");
      }
    },
  });
};
