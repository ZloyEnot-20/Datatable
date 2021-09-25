export default function statesReducer(state = [], action) {
  switch (action.type) {
    case "GET_STATES":
      return [...new Set(action.payload.map((item) => item.state))].sort(
        (a, b) => a.localeCompare(b)
      );

    default:
      return state;
  }
}
