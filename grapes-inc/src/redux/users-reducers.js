//import {UsersAPI} from './../api/api';

let initialState = {
 
}

const usersReducer = (state = initialState, action) => {
   
}

export const getUsers = (currentPage, pageSize) => (dispatch) => {
     dispatch(toggleIsFetching(true));
     dispatch(setCurrentPage(currentPage));
     UsersAPI.getUsers(currentPage, pageSize).then(data =>
      {
         dispatch(toggleIsFetching(false));
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount))
      })
}

export const unfollowThunk = (id) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
   UsersAPI.deleteUsers(id).then(data =>
   { if (data.resultCode == 0) {
            dispatch(unfollow(id));
         }
         dispatch(toggleFollowingProgress(false, id));
   })
}
export const followThunk = (id) => (dispatch) => {
   dispatch(toggleFollowingProgress(true, id));        
               UsersAPI.postUsers(id).then(data =>
            {
                  if (data.resultCode == 0) {
                     dispatch(follow(id))
                  }
                  dispatch(toggleFollowingProgress(false, id));
               })
}
export default usersReducer;