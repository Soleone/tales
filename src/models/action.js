export default class Action {
  constructor(option) {
    this.done = false
    this.id = option.id
    this.description = option.description
    this.result = option.result
    this.moment = option.moment
  }
}
