Quintus.EnemigoGUI = function(Q) {
    Q.Sprite.extend("Enemigo", {
        init: function(p) {
            this._super(p, {
                asset: "dragon300.png",
                type: Q.SPRITE_ENEMIGO,
                vida:20,
                esDisparo:true,
                velocidadFuego:1.5
            });
            this.add("2d");
            this.p.tiempoDisparo=this.p.velocidadFuego;
        },
        step: function(dt){

            this.p.tiempoDisparo -= dt;
            if(this.p.tiempoDisparo <=0){
                this.p.tiempoDisparo=this.p.velocidadFuego;
                var fuego =  new Q.Fuego({
                    x:this.p.x,
                    y:this.p.y,
                    danio:1
                })
                this.stage.insert(fuego);
            }

            // cuando la vida del dragon llegue a 0 destruirlo
            if(this.p.vida <= 0){
                this.destroy();
            }
        },
        hacerDanio: function(danio){
            console.log("danio ",danio);
            this.p.vida -= danio/60;
            console.log("energia quitada", this.p.vida);
        }
    })
}
