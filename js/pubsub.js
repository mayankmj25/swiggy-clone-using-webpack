import { foodItems, mapIdToIndex } from "./data.js";

export class EventEmitter {
  eventListenerByName = {};
  on(eventName, eventHandler) {
    // this.eventListenerByName[eventName]=eventHandler;
    if (this.eventListenerByName[eventName]) {
      this.eventListenerByName[eventName].push(eventHandler);
    } else {
      this.eventListenerByName[eventName] = [eventHandler];
    }
  }

  emit(eventName, payload) {
    // eventHandler=this.eventListenerByName[eventName];
    // eventHandler(payload);
    if (!this.eventListenerByName[eventName]) return;

    const eventHandlerList = this.eventListenerByName[eventName];
    if (!eventHandlerList.length) return;
    eventHandlerList.map((eventHandler) => {
      eventHandler(payload);
    });
  }

  remove(eventName, eventHandler) {
    if (!this.eventListenerByName[eventName]) return;
    const eventHandlerList = this.eventListenerByName[eventName];
    const newEventHandlerList = eventHandlerList.filter((handler) => {
      return eventHandler != handler;
    });
    this.eventListenerByName[eventName] = newEventHandlerList;
  }
}

export const eventEmitter = new EventEmitter();

export class Controller {
  addCountToData(id) {
    const index = mapIdToIndex[id];
    foodItems[index].count++;
    console.log(foodItems[index]);
    eventEmitter.emit("update", [id, foodItems[index].count]);
  }
  reduceCountToData(id) {
    const index = mapIdToIndex[id];
    if (foodItems[index].count !== 0) {
      foodItems[index].count--;
      console.log(foodItems[index]);
      eventEmitter.emit("update", [id, foodItems[index].count]);
    }
  }
}
export const controller = new Controller();
