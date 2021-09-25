export default function dataReducer(state = [], action) {
  switch (action.type) {
    case "SET_DATA":
      return [
        ...action.payload.map((item, index) => ({
          ...item,
          position: index + 1,
          state: item.adress.state,
        })),
      ];
    case "GET_DATA":
      return [
        ...action.payload.slice(0, 20).map((item, index) => ({
          ...item,
          position: index + 1,
          state: item.adress.state,
        })),
      ];
    case "SORT":
      return [
        ...state
          .filter((item) => item.id)
          .sort((a, b) => {
            if (action.payload.ascending === true) {
              return a[action.payload.sortedItem].localeCompare(
                b[action.payload.sortedItem]
              );
            }

            return b[action.payload.sortedItem].localeCompare(
              a[action.payload.sortedItem]
            );
          }),
      ];

    case "SORT_POSITION":
      return [
        ...state.sort((a, b) => {
          if (action.payload.ascending === true) {
            return b[action.payload.sortedItem] - a[action.payload.sortedItem];
          }
          return a[action.payload.sortedItem] - b[action.payload.sortedItem];
        }),
      ];

    case "FILTER":
      let counter = 0;
      return [
        ...action.payload.array
          .map((item, index, arr) => {
            if (
              item.firstName
                .toLowerCase()
                .includes(action.payload.search.toLowerCase())
            ) {
              counter++;
              return { ...item, position: counter };
            } else {
              return {
                id: null,
                firstName: null,
                lastName: null,
                email: null,
                phone: null,
                description: null,
                position: arr.length - counter,
                state: null,
              };
            }
          })
          .sort((a, b) => a.position - b.position)
          .map((item, index) => ({ ...item, position: index + 1 })),
      ];
    case "FILTER_BY_STATE":
      return [...action.payload];

    default:
      return state;
  }
}
