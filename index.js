AFRAME.registerComponent('movingbox', {
    schema: {
        animation:{type:"int",from:1,to:3}
    },

    init: function () {
      // Do something when component first attached.
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      this.data.animation=this.data.animation+0.1
      var controlBox = this.el.getAttribute("position")
      controlBox.x=this.data.animation
      this.el.setAttribute("position",{x:controlBox.x,y:controlBox.y,z:controlBox.z})
    }
});
