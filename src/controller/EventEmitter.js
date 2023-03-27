export class EventEmitter {
  eventListenerByName = {};
  on(eventName, eventHandler) {
    if (this.eventListenerByName[eventName]) {
      this.eventListenerByName[eventName].push(eventHandler);
    } else {
      this.eventListenerByName[eventName] = [eventHandler];
    }
  }

  emit(eventName, payload) {
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
