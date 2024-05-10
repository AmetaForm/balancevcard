const MAX_ROTATION_SPEED = 5;
const IDL_ROTATION_SPEED = 1;
const INCREASE_ROTATION_SPEED_PER_CLICK = 2;
const DECREASE_ROTATION_SPEED_PER_TICK = 0.02;

AFRAME.registerComponent('rotate_on_click', {
  schema: {
    axis: { type: 'string', default: 'y' },
    speed: { type: 'number', default: 0 },
  },
  tick: function () {
    const rotationValue = this.el.getAttribute('rotation');

    // if (this.data.axis === 'x') {
    //   rotationValue.x += this.data.speed;
    // } else if (this.data.axis === 'y') {
    // rotationValue.y += this.data.speed;
    // } else if (this.data.axis === 'z') {
    //   rotationValue.z += this.data.speed;
    // }

    // чтоб переполнения не было
    this.data.speed > 360 ? rotationValue.y = 0 : rotationValue.y += this.data.speed;

    this.el.setAttribute('rotation', rotationValue);

    this.data.speed > IDL_ROTATION_SPEED ?
      this.data.speed -= DECREASE_ROTATION_SPEED_PER_TICK :
      this.data.speed = IDL_ROTATION_SPEED;
  },

  init() {
    this.el.addEventListener('click', () => {
      if (this.data.speed < MAX_ROTATION_SPEED) {
        this.data.speed += INCREASE_ROTATION_SPEED_PER_CLICK;
      }
      else {
        console.log("maximum speed reached");
      }
    });
  }
});
