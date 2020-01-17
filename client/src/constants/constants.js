const auth = {
  authToken: "authToken",
  authUser: "authUser"
};

const baseUrl = "http://localhost:9949";
const authUrl = `${baseUrl}/auth`;
const machineUrl = `${baseUrl}/machines`;
const productUrl = `${baseUrl}/products`;
const serviceUrl = `${baseUrl}/services`;
const ticketUrl = `${machineUrl}/tickets`;

const functions = {
  isDateBeforeToday(date) {
    return (
      new Date(typeof date === String ? date : date.toDateString()) > new Date(new Date().toDateString())
    );
  },
  numberOfOpenTickets(arr) {
    let numberOfTickets = 0;

    for (let x = 0; x < arr.length; x++) {
      for (let i = 0; i < arr[x].tickets.length; i++) {
        if (arr[x].tickets[i].ticketStatus) {
          numberOfTickets++;
        }
      }
    }
    return numberOfTickets
  }
}


const dbConstants = {
  // auth
  loginUrl: `${authUrl}/login`,
  logoutUrl: `${authUrl}/logout`,
  registerUrl: `${authUrl}/signup`,

  // machines, products, services
  machinesUrl: `${machineUrl}/`,
  productsUrl: `${productUrl}/`,
  servicesUrl: `${serviceUrl}/`,
  ticketsUrl: `${ticketUrl}/`,
  addTicketsUrl: `${machineUrl}/add-ticket`,
  machineCreateUrl: `${machineUrl}/create`,
  machineEditByIdUrl: `${machineUrl}/edit/`,
  machineDeleteByIdUrl: `${machineUrl}/delete/`,
  machineLikeByIdUrl: `${machineUrl}/like/`,
  machineUnlikeByIdUrl: `${machineUrl}/unlike/`,
  machineReviewByIdUrl: `${machineUrl}/review/`,
  machineFileUploadByIdUrl: `${machineUrl}/upload/`,
  machineFileDeleteByIdUrl: `${machineUrl}/upload/delete/`,
  machineFileDownloadByIdUrl: `${machineUrl}/download/`,

};

// Input notifications
const notifications = {
  welcomeMsg: "Welcome to our online store",
  goToHome: "Go to home",
  goToStore: "Go to store",
  viewOrders: "View your orders",
  notFound: "Page not found",
  credentialsRequired: "Please provide credentials",
  emailRequired: "Please provide your email address",
  passwordRequired: "Please provide your password",
  passwordsDoNotMatch: "Passwords do not match",
  usernameRequired: "Please provide your username",
  machineTitleRequired: "Please provide machine title",
  machineAuthorRequired: "Please provide machine author",
  machineGenresRequired: "Please provide machine genres",
  machineImageRequired: "Please provide machine image URL",
  machinePriceRequired: "Please provide valid machine price",
  machineDescriptionRequired: "Please provide machine description",
  machineDataRequired: "Please provide machine data"
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
  // home
  indexPath: "/",
  indexName: "Online store",
  homePath: "/home",
  homeName: "Home",
  // machines
  machineDetailsPath: "/machines/details",
  machineDetailsName: "Details",
  storePath: "/store",
  storeName: "Store",
  storeGoToName: "Go to store",
  // cart
  cartPath: "/cart",
  cartName: "Cart",
  // orders
  myOrdersPath: "/orders",
  myOrdersName: "My orders",
  orderDetailsPath: "/orders/details",
  orderDetailsName: "View",
  // admin
  machineCreatePath: "/admin/create",
  machineCreateName: "Create",
  machineEditPath: "/admin/edit",
  machineEditName: "Edit machine",
  machineDeletePath: "/admin/delete",
  machineDeleteName: "Delete machine",
  orderDetailsAdminPath: "/admin/orders/details",
  ordersAdminPath: "/admin/orders",
  ordersAdminName: "Admin orders",
  ordersApprovedName: "Approved orders",
  ordersCancelledName: "Cancelled orders",
  ordersDeliveredName: "Delivered orders",
  ordersPendingName: "Pending orders",
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
