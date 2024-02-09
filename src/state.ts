const state = {
  data: {
    list: [],
  },
  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
        cb();
    }
    console.log("cambie de estado", newState)
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  addItems(item: string){
    const cs = this.getState();
    cs.list.push(item);
    this.setState(cs);
  }
};

export { state };
