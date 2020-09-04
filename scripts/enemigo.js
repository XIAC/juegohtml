Quintus.EnemigoGUI = function(Q) {
    Q.Sprite.extend("Enemigo", {
        init: function(p) {
            this._super(p, {
                asset: "dragon300.png",
                type: Q.SPRITE_ENEMIGO,
                vida:20
            });
            this.add("2d");
        },
        step: function(dt){
            // cuando la vida del dragon llegue a 0 destruirlo
            if(this.p.vida <= 0){
                this.destroy();
            }
        },
        hacerDanio: function(danio){
            console.log(danio);
            this.p.vida -= danio;
            console.log("energia quitada", this.p.vida);
        }
    })
}
