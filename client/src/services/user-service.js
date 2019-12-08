import { get, post, remove } from "../data/crud";
import { dbConstants } from "../constants/constants";

const getCurrentUserId = async () => {
  const user = await userService.getCurrentUserProfile();
  return user && user !== undefined ? user._id : null;
};

const getCurrentUserUsername = async () => {
  const user = await userService.getCurrentUserProfile();
  return user && user !== undefined ? user.username : null;
};



const getCurrentUserReviews = async () => {
  const username = await getCurrentUserUsername();
  if (!username) {
    return null;
  }

  return (await bookService.getAllBooks())
    .filter(
      b =>
        b.reviews.some(r => r) && b.reviews.some(r => r.createdBy === username)
    )
    .map(b => ({
      book: b,
      reviews: b.reviews.filter(r => r.createdBy === username)
    }));
};


const isCurrentUserBookFile = async id =>
  (await getCurrentUserBookFiles()).some(b => b._id === id);

const userService = {
  getCurrentUserProfile: () => get(dbConstants.userProfileUrl),
  getCurrentUserId: () => getCurrentUserId(),
  getCurrentUserUsername: () => getCurrentUserUsername(),
  getCurrentUserBookFiles: () => getCurrentUserBookFiles(),
  isCurrentUserBookFile: id => isCurrentUserBookFile(id),
  getCurrentUserBookLikes: () => getCurrentUserBookLikes(),
  getCurrentUserReviewsOnBooks: () => getCurrentUserReviews(),
  updateCurrentUser: userData => post(dbConstants.userProfileUrl, userData),
  deleteCurrentUser: () => remove(dbConstants.userProfileUrl)
};

export default userService;
