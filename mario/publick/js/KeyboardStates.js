const PRESSED = 1;
const RELEASED = 0;

export default class KeyboardState{
     constructor(){
          this.keyStates = new Map();
          this.keyMap = new Map();
     }

     addMapping(keyCode, callBack){
          this.keyMap.set(keyCode, callBack)
     }

     handleEvent(event){
          const {keyCode} = event;
console.log(keyCode);

          if(!this.keyMap.has(keyCode)){               
               return;
          }

          event.preventDefault();

          const keyState = event.type === 'keydown'? PRESSED:RELEASED;

          if(this.keyStates.get(keyCode) === keyState){
               return;
          }

          this.keyStates.set(keyCode, keyState);
          this.keyMap.get(keyCode)(keyState);
     }

     listenTo(window){
          ['keydown', 'keyup'].forEach(eventName =>{               
               window.addEventListener(eventName, event =>{
                    this.handleEvent(event);
               });
          });
     }
}