export const initialState = [
    {
        task: 'Go over TK before lecture',
        id: 1,
        completed: false
      },
      {
        task: 'Eat lunch',
        id: 2,
        completed: false
      },
      {
        task: 'Work on todays project', 
        id:3,
        completed: false
      },
      {
        task: 'Go first @ standup',
        id: 4,
        completed: false
      },
      {
        task: 'Watch Buffy', 
        id: 5,
        completed: false
    }
];



const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    id: Date.now(),
                    task: action.payload,
                    completed: false
                }
            ];            
        default: 
            return state;
    }
}

export default todoReducer;