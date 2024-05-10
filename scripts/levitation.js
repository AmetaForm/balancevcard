const MAX_LEVITATION_SPEED = 2;
const INCREASE_LEVITATION_SPEED_PER_CLICK = 1;
const DECREASE_LEVITATION_SPEED_PER_TICK = 0.08;
const DECREASE_LEVITATION_DELTA = 0.2; // уменьшение на пиках

let positionY = 0;
let deltaPositionY = 0, maxDeltaPosY = 0, isToMin = false;

AFRAME.registerComponent('levitation', {
  tick: function () {
    if (maxDeltaPosY > 0) {
      if (!isToMin) { // вверх
        deltaPositionY += DECREASE_LEVITATION_SPEED_PER_TICK;

        if (deltaPositionY > maxDeltaPosY) { // пик
          maxDeltaPosY -= DECREASE_LEVITATION_DELTA;
          isToMin = true;
        }
      } else if (isToMin) { //низ
        deltaPositionY -= DECREASE_LEVITATION_SPEED_PER_TICK;

        if (deltaPositionY < 0) { // дно
          maxDeltaPosY -= DECREASE_LEVITATION_DELTA;
          isToMin = false;
        }
      }
      const positionValue = this.el.getAttribute('position');
      positionValue.y = positionY + deltaPositionY;

      // console.log(deltaPositionY);

      this.el.setAttribute('position', positionValue);
    }
  },

  init() {
    positionY = this.el.getAttribute('position').y;

    this.el.addEventListener('click', () => {
      if (maxDeltaPosY < MAX_LEVITATION_SPEED) {
        maxDeltaPosY += INCREASE_LEVITATION_SPEED_PER_CLICK;
      }
    });
  }
});