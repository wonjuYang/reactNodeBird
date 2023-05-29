export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "triplej",
      },
      content: "첫번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9uRAWgsOs2WvysH3_PGDgqZV9L5edCUd2fLPSayu5Gd6gBEe5DCe&usqp=CAE&s",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9uRAWgsOs2WvysH3_PGDgqZV9L5edCUd2fLPSayu5Gd6gBEe5DCe&usqp=CAE&s",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9uRAWgsOs2WvysH3_PGDgqZV9L5edCUd2fLPSayu5Gd6gBEe5DCe&usqp=CAE&s",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "엥",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "워후~",
        },
      ],
    },
  ],
  imagePaths: [], // 이미지 저장 경로
  postAdded: false, //게시글 추가가 완료되었을 때
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다",
  User: {
    id: 1,
    nickname: "triplej",
  },
  Images: [],
  Commnets: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
