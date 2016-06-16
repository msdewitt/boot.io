var Q = Quintus().include("Sprites, Scenes, Input").setup({maximize: true, development: true});
Q.stageScene("level1",1);
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
  var stage = Q.stage(1);
  Q.gameLoop(function(dt) {
    ball.update(dt);
    stage.insert(ball);
    Q.clear();
    ball.render(Q.ctx);
  });
});

//create a scene that has a callback function to add items to a STAGE
// and control the attributes of a stage

// Q.scene("level1",function(stage) {
//   stage.insert(new Q.Ball());
// });

Q.stageScene("level0",0);
Q.stageScene("level1",1);
//index 2 takes priority over 1
//This will stage the scene on the default (index 0) stage and remove anything else on that stage.
var stage = Q.stage(1);
//A stage is a container for a bunch of sprites
var ball = stage.insert(new Q.Ball());
Q.stage(); // returns the active stage
Q.stage(0); // always returns stage 0
Q.stage(1); // always return stage 1
