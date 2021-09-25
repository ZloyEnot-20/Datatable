const status = [
  {
    name: "position",
    ascending: true,
  },
  {
    name: "firstName",
    ascending: true,
  },
  {
    name: "lastName",
    ascending: true,
  },
  {
    name: "email",
    ascending: true,
  },
  {
    name: "phone",
    ascending: true,
  },
  {
    name: "state",
    ascending: true,
  },
];

export default function dataStatusReducer(state = status, action) {
  switch (action.type) {
    case "CHANGE_STATUS":
      return [
        ...state.map((item) => {
          if (item.name === action.payload.name)
            return { ...item, ascending: !item.ascending };
          return item;
        }),
      ];

    default:
      return state;
  }
}
