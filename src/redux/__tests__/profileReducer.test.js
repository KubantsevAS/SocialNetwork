import profileReducer, { addPost, deletePost } from "../profileReducer";
// in package.json was:   "test": "react-scripts test",
// should be: "test": "jest"

let state = {
    postsData: [
        { id: 1, message: 'Hi, how are you?', number: 20 },
        { id: 2, message: "It's my first post", number: 15 },
        { id: 3, message: "Let's go!", number: 32 },
    ],
    profile: null,
    status: "",
}

describe("profileReducer test", () => {
    
    test('posts number should be incremented', () => {
        // TEST DATA
        const action = addPost('newPost_eye');
        //ACTION
        const newState = profileReducer(state, action);
        //EXPECTATION
        expect(newState.postsData.length).toBe(4);
    })

    test('new post text test', () => {

        const action = addPost('newPost_eye');

        const newState = profileReducer(state, action);

        expect(newState.postsData[3].message).toBe("newPost_eye");
    })

    test('posts number after deleting post should be decremented', () => {

        const action = deletePost(1);

        const newState = profileReducer(state, action);

        expect(newState.postsData.length).toBe(2);
    })

    test("posts number after deleting post shouldn't be decremented if id is incorecct", () => {

        const action = deletePost(1000);

        const newState = profileReducer(state, action);

        expect(newState.postsData.length).toBe(3);
    })
})
