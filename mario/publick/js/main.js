import Compositor from './Compositor.js';
import { loadLevel } from './loaders.js';
import { loadMarioSprite, loadBackgroundSprites } from './sprites.js'
import { createBackgroundLayer } from './layers.js';

// function loadImage(url) {
//     return new Promise(resolve => {
//         const image = new Image();
//         image.addEventListener('load', () => {
//             resolve(image)
//         });
//         image.src = url;
//     });
// }

// class SpriteSheet {
//     constructor(image, width, height) {
//         this.image = image;
//         this.width = width;
//         this.height = height;
//         this.tiles = new Map();
//     }
//     define(name, x, y) {
//         const buffer = document.createElement('canvas');
//         buffer.width = this.width;
//         buffer.height = this.height;
//         buffer
//             .getContext('2d')
//             .drawImage(
//                 this.image,
//                 x * this.width,
//                 y * this.height,
//                 this.width,
//                 this.height,
//                 0,
//                 0,
//                 this.width,
//                 this.height);
//         this.tiles.set(name, buffer);
//     }
//     draw(name, context, x, y) {
//         const buffer = this.tiles.get(name);
//         context.drawImage(buffer, x, y);
//     }
// }



const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


// context.fillRect(0, 0, 50, 50);

function createSpriteLayer(sprite, pos) {
    return function drawSpriteLayer(context) {
        for (let i = 0; i < 20; ++i) {
            sprite.draw('idle', context, pos.x + i * 16, pos.y);
        }
    }
}

Promise.all([
    // loadMarioSprite(),
    loadBackgroundSprites(),
    loadLevel('1-1'),
])
    .then(([marioSprite, loadBackgroundSprites, level]) => {
        const comp = new Compositor();
        // comp.layers.push(backgroundLayer);


        const backgroundLayer = createBackgroundLayer(level.backgrounds, sprites);
        comp.layers.push(backgroundLayer);
        const pos = {
            x: 0,
            y: 0,
        };
        const spriteLayer = createSpriteLayer(marioSprite, pos);
        comp.layers.push(spriteLayer)
        function update() {
            comp.draw(context);
            pos.x += 2;
            pos.y += 2;
            requestAnimationFrame(update);
        }
        update();
    });


        // for (let x = 0; x < 25; ++x) {
        //     for (let y = 0; y < 14; ++y) {
        //         sprites.drawTile('sky', context, x, y)
        //     }
        // }
        // for (let x = 0; x < 25; ++x) {
        //     for (let y = 12; y < 14; ++y) {
        //         sprites.drawTile('ground', context, x, y)

        //     }
        // }

        // положение на картине картинки

        // for (let x = 0; x < 25; ++x) {
        //     for (let y = 0; y < 14; ++y) {
        //         sprites.drawTile('sky', context, x, y)

        //         // sprites.draw(/*'ground'*/ 'sky', context, x * 16, y * 16)
        //         // context, 45, 62
        //         // 45,62 куда разместить картинку

        //     }
        // }

        // context.drawImage(image, 0, 0, 16, 16, 0, 0, 16, 16)
        // берем картинку, по которой проходимся, потом первые 4 цифры это координаты на картинке первое икс, второе игрик
        // вторая четвёрка это размещение на странице по иксуб по игрику, какя берется ширина картинки, высота
