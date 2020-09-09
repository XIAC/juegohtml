Quintus.FuegoGUI = function(Q) {
    Q.Sprite.extend("Fuego", {
        init: function(p) {
            this._super(p, {
                asset: "fuego50.png",
                type: Q.SPRITE_BALAS,
                vx: 200
            });
            this.add("2d");
        },
        step: function(dt){
            // cuando la vida del dragon llegue a 0 destruirlo
            if(this.p.x >= 1080){
                this.destroy();
            }
        },
    })
}
