import profileReducer, { addPost, deletePost } from "../profileReducer";
// in package.json was:   "test": "react-scripts test",

let state = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', number: 20 },
        { id: 2, message: "It's my first post", number: 15 },
        { id: 3, message: "Let's go!", number: 32 },
    ],
    profile: null,
    status: "",
}

test('posts number should be incremented', () => {
    // TEST DATA
    let action = addPost('newPost_eye')
    //ACTION
    let newState = profileReducer(state, action);
    //EXPECTATION
    expect(newState.postsData.length).toBe(4);
})

test('new post text test', () => {
    
    let action = addPost('newPost_eye')
    
    let newState = profileReducer(state, action);
    
    expect(newState.postsData[3].message).toBe("newPost_eye");
})

test('posts number after deleting post should be decremented', () => {
    
    let action = deletePost(1)
    
    let newState = profileReducer(state, action);
    
    expect(newState.postsData.length).toBe(2);
})

test("posts number after deleting post shouldn't be decremented if id is incorecct", () => {
    
    let action = deletePost(1000)
    
    let newState = profileReducer(state, action);
    
    expect(newState.postsData.length).toBe(3);
})