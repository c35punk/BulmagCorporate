import { get, post, remove } from "../data/crud";
import machineService from "./machine-service";
import { dbConstants } from "../constants/constants";
import orderService from "./order-service";

const getCurrentUserId = async () => {
  const user = await userService.getCurrentUserProfile();
  return user && user !== undefined ? user._id : null;
};

const getCurrentUserUsername = async () => {
  const user = await userService.getCurrentUserProfile();
  return user && user !== undefined ? user.username : null;
};

const getCurrentUserMachineLikes = async () => {
  const username = await getCurrentUserUsername();
  if (!username) {
    return null;
  }

  return (await machineService.getAllMachines()).filter(
    b => b.likes.some(l => l) && b.likes.includes(username)
  );
};

const getCurrentUserReviews = async () => {
  const username = await getCurrentUserUsername();
  if (!username) {
    return null;
  }

  return (await machineService.getAllMachines())
    .filter(
      b =>
        b.reviews.some(r => r) && b.reviews.some(r => r.createdBy === username)
    )
    .map(b => ({
      machine: b,
      reviews: b.reviews.filter(r => r.createdBy === username)
    }));
};

const getCurrentUserMachineFiles = async () => {
  let userProducts = [];
  (await orderService.getUserOrders())
    .filter(o => o.status === "Delivered") // only
    .map(o => (userProducts = userProducts.concat(o.products)));
  const machineIds = [...new Set(userProducts.map(p => p._id))];

  const machineFiles = (await machineService.getAllMachines())
    .filter(b => machineIds.includes(b._id) && b.file)
    .map(b => ({ _id: b._id, title: b.title, image: b.image, file: b.file }));
  console.log(machineFiles);

  return machineFiles;
};

const isCurrentUserMachineFile = async id =>
  (await getCurrentUserMachineFiles()).some(b => b._id === id);

const userService = {
  getCurrentUserProfile: () => get(dbConstants.userProfileUrl),
  getCurrentUserId: () => getCurrentUserId(),
  getCurrentUserUsername: () => getCurrentUserUsername(),
  getCurrentUserMachineFiles: () => getCurrentUserMachineFiles(),
  isCurrentUserMachineFile: id => isCurrentUserMachineFile(id),
  getCurrentUserMachineLikes: () => getCurrentUserMachineLikes(),
  getCurrentUserReviewsOnMachines: () => getCurrentUserReviews(),
  updateCurrentUser: userData => post(dbConstants.userProfileUrl, userData),
  deleteCurrentUser: () => remove(dbConstants.userProfileUrl)
};

export default userService;
