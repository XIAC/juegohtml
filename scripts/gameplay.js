Quintus.GamePlayGUI = function (Q) {
    Q.Sprite.extend("Nivel",{
        init: function(p){
            this._super(p, {
                asset: "bg.jpg",
                type: Q.SPRITE_PISO,
                x: 1080 / 2,
                y: 720 / 2,
                w: 960,
                h: 720,
                frecuenciaHongo: {min:1, max:5}
              });
            this.tiempoSiguienteHongo=this.siguienteHongo();
            this.on("touch");
        },
        touch: function(touch){
            console.log(touch);
        },
        step: function(dt){
            this.tiempoSiguienteHongo-= dt;
            if (this.tiempoSiguienteHongo <= 0 ){
                this.tiempoSiguienteHongo =this.siguienteHongo();
                Q.stage(1).insert(new Q.Hongo());
                console.log(":: dentro IF ",this.tiempoSiguienteHongo);
            }
        },
        siguienteHongo: function (){
            return this.p.frecuenciaHongo.min + Math.random() * (this.p.frecuenciaHongo.max - this.p.frecuenciaHongo.min);
        }
    });
}