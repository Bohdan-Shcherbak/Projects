export default class Compositor {
    constructor() {
        this.layers = [];
    }
    draw(context) {
        this.forEach(layer => {
            layer(context);
        });
    }
}