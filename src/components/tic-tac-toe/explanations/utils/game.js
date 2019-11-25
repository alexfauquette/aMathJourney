export default class Game {
  PLAYERS = ["X", "O"];
  NULL = "n";
  EMPTY = ".";
  UNKNOW = "?";

  actions(state) {
    let output = [];
    for (let index = 0; index < 9; index++) {
      if (state[index] === ".") {
        output.push(index);
      }
    }
    return output;
  }

  getPlayerID(stateOrPlayer) {
    if (stateOrPlayer.length === 9) {
      let step = 0;
      for (let i = 0; i < 9; i++) {
        if (stateOrPlayer[i] !== ".") {
          step++;
        }
      }
      return step % 2;
    }
    else if(stateOrPlayer.length === 1){
        return this.PLAYERS.indexOf(stateOrPlayer);
    }
    else{
        return null;
    }
  }

  getPlayer(state) {
    return this.PLAYERS[this.getPlayerID(state)];
  }

  getAdversary(player) {
    if (player === this.PLAYERS[0]) {
      return this.PLAYERS[1];
    }
    if (player === this.PLAYERS[1]) {
      return this.PLAYERS[0];
    }
  }


  play(state, action) {
    let player = this.getPlayer(state);
    let newState =
      state.substring(0, action) + player + state.substring(action + 1);
    return newState;
  }

  isFull(state) {
    for (let i = 0; i < 9; i++) {
      if (state[i] === ".") {
        return false;
      }
    }
    return true;
  }

  isFinished(state) {
    for (let i = 0; i < 3; i++) {
      if (
        state[3 * i] === state[3 * i + 1] &&
        state[3 * i + 1] === state[3 * i + 2] &&
        state[3 * i] !== this.EMPTY
      ) {
        return true;
      }
      if (
        state[i] === state[3 + i] &&
        state[3 + i] === state[6 + i] &&
        state[i] !== this.EMPTY
      ) {
        return true;
      }
    }
    if (
      state[0] === state[4] &&
      state[4] === state[8] &&
      state[0] !== this.EMPTY
    ) {
      return true;
    }
    if (
      state[2] === state[4] &&
      state[4] === state[6] &&
      state[2] !== this.EMPTY
    ) {
      return true;
    }
    return this.isFull(state);
  }

  getWinner(state) {
    for (let i = 0; i < 3; i++) {
      if (
        state[3 * i] === state[3 * i + 1] &&
        state[3 * i + 1] === state[3 * i + 2] &&
        state[3 * i] !== this.EMPTY
      ) {
        return state[3 * i];
      }
      if (
        state[i] === state[3 + i] &&
        state[3 + i] === state[6 + i] &&
        state[i] !== this.EMPTY
      ) {
        return state[i];
      }
    }
    if (
      state[0] === state[4] &&
      state[4] === state[8] &&
      state[0] !== this.EMPTY
    ) {
      return state[0];
    }
    if (
      state[2] === state[4] &&
      state[4] === state[6] &&
      state[2] !== this.EMPTY
    ) {
      return state[2];
    }
    if (this.isFull(state)) {
      return this.NULL;
    }
    return this.UNKNOW;
  }

  getVictory(state) {
    for (let i = 0; i < 3; i++) {
      if (
        state[3 * i] === state[3 * i + 1] &&
        state[3 * i + 1] === state[3 * i + 2] &&
        state[3 * i] !== this.EMPTY
      ) {
        return [{col: 0, line:i},{col: 2, line:i}];
      }
      if (
        state[i] === state[3 + i] &&
        state[3 + i] === state[6 + i] &&
        state[i] !== this.EMPTY
      ) {
        return [{col: i, line:0},{col: i, line:2}];
      }
    }
    if (
      state[0] === state[4] &&
      state[4] === state[8] &&
      state[0] !== this.EMPTY
    ) {
      return [{col: 0, line:0},{col: 2, line:2}];
    }
    if (
      state[2] === state[4] &&
      state[4] === state[6] &&
      state[2] !== this.EMPTY
    ) {
      return [{col: 2, line:0},{col: 0, line:2}];
    }
    return [];
  }
}
