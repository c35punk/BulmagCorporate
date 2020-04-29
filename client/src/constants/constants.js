const auth = {
  authToken: "authToken",
  authUser: "authUser"
};

const baseUrl = "https://bulmag.bg/api";
const lotusDbBaseUrl = "http://srvcom2.bulmag.bg"
const lotusServiceUrl = `${lotusDbBaseUrl}/service`
const authUrl = `${baseUrl}/auth`;
const machineUrl = `${baseUrl}/machines`;
const productUrl = `${baseUrl}/products`;
const serviceUrl = `${baseUrl}/services`;
const mailUrl = `${baseUrl}/mail`;
const ticketUrl = `${machineUrl}/tickets`;

const functions = {
  isDateBeforeToday(date) {
    return (
      new Date(typeof date === String ? date : date.toDateString()) > new Date(new Date().toDateString())
    );
  },


}


const dbConstants = {
  // auth
  loginUrl: `${authUrl}/login`,
  logoutUrl: `${authUrl}/logout`,
  registerUrl: `${authUrl}/signup`,
  getUsersUrl: `${authUrl}/users`,

  // machines, products, services, mail
  machinesUrl: `${machineUrl}/`,
  productsUrl: `${productUrl}/`,
  servicesUrl: `${serviceUrl}/`,
  mailsUrl: `${mailUrl}/send`,
  ticketsUrl: `${ticketUrl}/`,
  addTicketsUrl: `${machineUrl}/add-ticket`,
  addProductsUrl: `${productUrl}/add-product`,
  machineCreateUrl: `${machineUrl}/create`,
  machineEditByIdUrl: `${machineUrl}/edit/`,
  machineDeleteByIdUrl: `${machineUrl}/delete/`,
  machineLikeByIdUrl: `${machineUrl}/like/`,
  machineUnlikeByIdUrl: `${machineUrl}/unlike/`,
  machineReviewByIdUrl: `${machineUrl}/review/`,
  machineFileUploadByIdUrl: `${machineUrl}/upload/`,
  machineFileDeleteByIdUrl: `${machineUrl}/upload/delete/`,
  machineFileDownloadByIdUrl: `${machineUrl}/download/`,

  // lotus db
  lotusServiceJournal: `${lotusServiceUrl}/service.nsf/api/data/documents?search=`,
  lotusThinkJournal: `${lotusServiceUrl}/think.nsf/api/data/documents?search=`,
  lotusMaintJournal: `${lotusServiceUrl}/maint.nsf/api/data/documents?search=`,
  lotusPartsJournal: `${lotusServiceUrl}/parts.nsf/api/data/documents?search=`

};

// Input notifications
const notifications = {
  welcomeMsg: "Welcome",
  goToHome: "Go to home",
  goToStore: "Go to store",
  viewOrders: "View your orders",
  notFound: "Page not found",
  credentialsRequired: "Please provide credentials",
  emailRequired: "Please provide your email address",
  passwordRequired: "Please provide your password",
  passwordsDoNotMatch: "Passwords do not match",
  usernameRequired: "Please provide your username",
};

const notificationMessages = {
  // Auth
  loginRequiredMsg: "Please login to continue",
  logoutSuccessMsg: "You have successfully logged out",
  // Machines
  machineCreatedMsg: "Machine created",
  machineDeletedMsg: "Machine deleted",
  machineEditedMsg: "Machine updated",
  machineLikeddMsg: "Machine liked",
  machineUnlikeddMsg: "Machine unliked",
  machineAddedToCartMsg: "Machine added to cart",
  machineRemovedFromCartMsg: "Machine removed from cart",
  machineInfoUpdatedMsg: "Machine info & price updated",
  machineQuantityUpdatedMsg: "Machine quantity updated",
  machineFileNotFoundMsg: "Machine file not found",
  machineNotFoundMsg: "Machine not found",
  // Cart
  cartEmptyMsg: "Cart is empty",
  cartUpdatedMsg: "Cart updated",
  // Orders
  orderCreateMsg: "Order created",
  orderApprovedMsg: "Order approved",
  orderNotFoundMsg: "Order not found",
  // Reviews
  reviewCreatedMsg: "Review added",
  // Invalid
  invalidInput: "Invalid input",
  notFoundMsg: "Not found",
  errorMsg: "Something went wrong. Please try again",
  // Loading
  loadingMsg: "Loading..."
};

const paths = {
  // auth
  registerPath: "/signup",
  registerName: "Register",
  loginPath: "/login",
  loginName: "Login",
  logoutPath: "/logout",
  logoutName: "Logout",
  // machines
  machineDetailsPath: "/machines/details",
  machineDetailsName: "Details",
  storePath: "/store",
  storeName: "Store",
  storeGoToName: "Go to store",
  // user
  profilePath: "/profile",
  profileName: "Profile",
  profileEditPath: "/profile/edit",
  profileDeletePath: "/profile/delete"
};

const roles = {
  adminRole: "Admin"
};

const actions = {
  create: "create",
  edit: "edit",
  delete: "delete",
  login: "login",
  register: "register"
};

export {
  actions,
  auth,
  dbConstants,
  notifications,
  notificationMessages,
  paths,
  roles,
  functions
};