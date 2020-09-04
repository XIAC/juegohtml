//Definicion de módulo
Quintus.BarraLateralGUI = function (Q) {
  Q.UI.Container.extend("BarraLateral", {
    init: function () {
      this._super({
        fill: "#B71C1C",
        x: 60,
        y: 300,
        radius: 0,
        border: 0,
        w: 150,
        h: 720,
      });
      this.on("inserted");
      var panel=this;
      Q.state.on("change.cantidadHongo", function(){
        panel.actualizarContadorHongos();
      })
    },
    inserted: function () {
      // creado un objeto hongo
      var hongo = new Q.Sprite({
        asset: "hongo.png",
        x: 60,
        y: 40,
        scale: 0.03,
      });
      this.stage.insert(hongo);
      // creacion de texto
      this.totalHongos= new Q.UI.Text({
        x: 60,
        y: 125,
        label: " "
      });
      this.stage.insert(this.totalHongos);
      this.actualizarContadorHongos();
    },
    actualizarContadorHongos: function(){
      this.totalHongos.p.label=Q.state.get("cantidadHongo")+" ";
    }
  });
};
