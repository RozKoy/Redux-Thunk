function makeRandomData(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    let i = 0;
    while (i < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      i += 1;
    }

    return result;
}

function makeData (x) {
  return {
    id: x + 1,
    from_loc: "Sumatera",
    to_loc: makeRandomData(4),
    plane_type: makeRandomData(5),
    time: 'Januari ' + String(Math.floor(Math.random() * 30)) + ', 2023. ' + makeRandomData(5),
  };
}

const initialState={
 value: []
};

export const counterReducer=(state=initialState, action)=>{
 console.log(state)
 switch(action.type){
  case "INCREASE":
    (Math.floor(Math.random() * 2) == 1) ? state.value.unshift(makeData(state.value.length)) : state.value.push(makeData(state.value.length));
    return {state, value: state.value};
  case "DECREASE":
    (Math.floor(Math.random() * 2) == 1) ? state.value.shift() : state.value.pop();
    return {state, value: state.value};
  case "MODIFY":
    if (state.value.length != 0) {
      const index = Math.floor(Math.random() * state.value.length);
      state.value[index] = makeData(index);
    }
    return {state, value: state.value};
  default:
   return state; 
 }
}