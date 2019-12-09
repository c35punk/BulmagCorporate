const auth = {
  authToken: "authToken",
  authUser: "authUser"
};

const baseUrl = "http://localhost:9949";
const authUrl = `${baseUrl}/auth`;
const machinesUrl = `${baseUrl}/dashboard`;
const productUrl = `${baseUrl}/products`;


const dbConstants = {
  // auth
  loginUrl: `${authUrl}/login`,
  logoutUrl: `${authUrl}/logout`,
  registerUrl: `${authUrl}/signup`,
  // products
  productCreateUrl: `${productUrl}/add-product`,
  productEditByIdUrl: `${productUrl}/edit/`,
  productDeleteByIdUrl: `${productUrl}/delete/`,
  productReviewDeleteByIdIndexUrl: `${productUrl}/review/delete/`, // :productId/:reviewIndex
  productFileUploadByIdUrl: `${productUrl}/upload/`,
  productFileDeleteByIdUrl: `${productUrl}/upload/delete/`,
  productFileDownloadByIdUrl: `${productUrl}/download/`,
  productsAllUrl: `${productUrl}/all`,
  // machines
  machineCreateUrl: `${machinesUrl}/create`,
  machineApproveByIdUrl: `${machinesUrl}/approve/`,
  machineCancelByIdUrl: `${machinesUrl}/cancel/`,
  machineDeliverByIdUrl: `${machinesUrl}/deliver/`,
  machinesByUserUrl: `${machinesUrl}/user`,
  machinesAllUrl: `${machinesUrl}/all`,
  machinesApprovedUrl: `${machinesUrl}/approved`,
  machinesCancelledUrl: `${machinesUrl}/cancelled`,
  machinesDeliveredUrl: `${machinesUrl}/delivered`,
  machinesPendingUrl: `${machinesUrl}/pending`,
  // user
  userProfileUrl: `/profile`,

};

// Input notifications
const notifications = {
  welcomeMsg: "Welcome to our online store",
  goToHome: "Go to home",
  goToStore: "Go to store",
  viewMachines: "View your machines",
  notFound: "Page not found",
  credentialsRequired: "Please provide credentials",
  emailRequired: "Please provide your email address",
  passwordRequired: "Please provide your password",
  passwordsDoNotMatch: "Passwords do not match",
  usernameRequired: "Please provide your username",
  productTitleRequired: "Please provide product title",
  productAuthorRequired: "Please provide product author",
  productGenresRequired: "Please provide product genres",
  productImageRequired: "Please provide product image URL",
  productPriceRequired: "Please provide valid product price",
  productDescriptionRequired: "Please provide product description",
  productDataRequired: "Please provide product data"
};

const notificationMessages = {
  // Auth
  loginRequiredMsg: "Please login to continue",
  logoutSuccessMsg: "You have successfully logged out",
  // Products
  productCreatedMsg: "Product created",
  productDeletedMsg: "Product deleted",
  productEditedMsg: "Product updated",
  productLikeddMsg: "Product liked",
  productUnlikeddMsg: "Product unliked",
  productInfoUpdatedMsg: "Product info & price updated",
  productQuantityUpdatedMsg: "Product quantity updated",
  productFileNotFoundMsg: "Product file not found",
  productNotFoundMsg: "Product not found",
  // Machines
  machineCreateMsg: "Order created",
  machineApprovedMsg: "Order approved",
  machineNotFoundMsg: "Order not found",
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
  registerPath: "/register",
  registerName: "Register",
  loginPath: "/login",
  loginName: "Login",
  logoutPath: "/",
  logoutName: "Logout",
  // home
  indexPath: "/",
  indexName: "Bulmag AD",
  // products
  productDetailsPath: "/products",
  productDetailsName: "Details",
  // machines
  myMachinesPath: "/dashboard",
  myMachinesName: "My machines",
  // admin
  productCreatePath: "/admin/create",
  productCreateName: "Create",
  productEditPath: "/admin/edit",
  productEditName: "Edit product",
  productDeletePath: "/admin/delete",
  productDeleteName: "Delete product",
  machineDetailsAdminPath: "/admin/machines/details",
  machinesAdminPath: "/admin/machines",
  machinesAdminName: "Admin machines",
  machinesApprovedName: "Approved machines",
  machinesCancelledName: "Cancelled machines",
  machinesDeliveredName: "Delivered machines",
  machinesPendingName: "Pending machines",
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
  roles
};
