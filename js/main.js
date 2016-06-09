var Q = Quintus().include("Sprites").setup({maximize: true});

Q.Sprite.extend("Ball",{
  init:function(p) {
    this._super(p,{
      x: 0,
      y: 300,
      vx: 25,
      vy: -100,
      w: 100,
      h: 100,
      asset: "ball.png",
    });
  },

  step: function(dt) {
    this.p.vy += dt * 9.8;

    this.p.x += this.p.vx * dt;
    this.p.y += this.p.vy * dt;
  }
});

Q.load(["ball.png"],function() {
  var ball = new Q.Ball();
  Q.gameLoop(function(dt) {
    ball.update(dt);
    Q.clear();
    ball.render(Q.ctx);
  });
});
