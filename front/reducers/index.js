import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

//액션 크리에이터 예시
export const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data,
  };
};

//이전상태와 액션을 통해서 다음 상태를 만들어내는 함수
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE: //서버사이드렌더링을 위해
        return { ...state, ...action.payload };
      default:
        return {
          ...state,
        };
    }
  },
  user,
  post,
});

export default rootReducer;
