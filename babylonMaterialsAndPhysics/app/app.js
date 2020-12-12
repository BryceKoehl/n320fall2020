var canvas = document.getElementById("renderCanvas");

// setup
var engine = new BABYLON.Engine(canvas, true);
var camera, mat;
var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
var physicsPlugin = new BABYLON.CannonJSPlugin();

var scene = createScene();

// render
engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("click", function () {
  var pickResult = scene.pick(scene.pointerX, scene.pointerY);
  console.log(pickResult);
});

function createScene() {
  // Create the scene space
  var scene = new BABYLON.Scene(engine);

  scene.enablePhysics(gravityVector, physicsPlugin);
  // Add a camera to the scene and attach it to the canvas
  camera = new BABYLON.ArcRotateCamera(
    "Camera",
    Math.PI / 2,
    Math.PI / 4,
    4,
    BABYLON.Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas, true);

  //general setup
  sphere = BABYLON.MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 0.35 },
    scene
  );
  sphere.position = new BABYLON.Vector3(0, 0.5, 0);
  light = new BABYLON.HemisphericLight(
    "HemiLight",
    new BABYLON.Vector3(1, 1, 0),
    scene
  );
  // orb
  mat = new BABYLON.StandardMaterial("base", scene);
  mat.diffuseTexture = new BABYLON.Texture("img/texture.png", scene);
  mat.specularColor = new BABYLON.Color3(0.05, 0.05, 0.05);
  sphere.material = mat;
  sphere.physicsImpostor = new BABYLON.PhysicsImpostor(
    sphere,
    BABYLON.PhysicsImpostor.SphereImpostor,
    { mass: 1, restitution: 1 },
    scene
  );

  sphere.physicsImpostor.physicsBody.linearDamping = 0.6;
  sphere.physicsImpostor.physicsBody.angularDamping = 0.5;
  sphere.friction = 2;

  // ground

  var ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    { height: 4, width: 4, subdivisions: 4 },
    scene
  );
  ground.physicsImpostor = new BABYLON.PhysicsImpostor(
    ground,
    BABYLON.PhysicsImpostor.BoxImpostor,
    { mass: 0, restitution: 0.9 },
    scene
  );

  ground.physicsImpostor.friction = 10;

  //force
  sphere.physicsImpostor.applyForce(
    new BABYLON.Vector3(0, 0, 1500),
    sphere.getAbsolutePosition()
  );

  return scene;
}
