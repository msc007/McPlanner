const initState = {
	//dummy objects for now
	/*projects: [
		{id: '1', title: 'help me find preach', content: 'blah blah blah blah'},
		{id: '2', title: 'collect all the stars', content: 'blah blah blah blah'},
		{id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah blah'}
	]*/
};

export default function projectReducer(state =initState, action){
	switch(action.type) {
		case 'CREATE_PROJECT':
			console.log('created project', action.project)
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('create project error', action.err)
			return state;
		default:
			return state;
	}
};

