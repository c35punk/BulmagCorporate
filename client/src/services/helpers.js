// Do not turn into arrow function to keep original this.state
function handleInputChange(event, propertyName) {
  const { name, value } = event.target;

  const propertyValue = this.state[propertyName];
  propertyValue[name] = value;

  this.setState({ [propertyName]: propertyValue });
  console.log(propertyValue);
}

// Do not turn into arrow function to keep original this.state
function handleBlur(field, propertyName) {
  const propertyValue = this.state[propertyName];
  propertyValue[field] = true;

  this.setState({ [propertyName]: propertyValue });
}

// Do not turn into arrow function to keep original this.state
function updatePaginationState(items, pageLimit) {
  this.setState(prevState => {
    let { pagination } = prevState;
    pagination.currentPage = 1;
    pagination.totalPages = Math.max(1, Math.ceil(items.length / pageLimit)); // min 1

    return { pagination };
  });

  console.log(this.state.pagination);
}

function handlePageDecrease() {
  const { pagination } = this.state;
  if (pagination.currentPage === 1) {
    return;
  }

  incrementCurrentPage.bind(this)(-1);
}

function handlePageIncrease() {
  const { pagination } = this.state;
  if (pagination.currentPage === pagination.totalPages) {
    return;
  }

  incrementCurrentPage.bind(this)(1);
}

function incrementCurrentPage(change) {
  this.setState(prevState => {
    const pagination = prevState.pagination;
    pagination.currentPage = pagination.currentPage + change;
    console.log(pagination);
    return { pagination };
  });
}

function changePageTo(newPage) {
  this.setState(prevState => {
    const pagination = prevState.pagination;
    pagination.currentPage = newPage;
    console.log(pagination);
    return { pagination };
  });
}

const filterCurrentPageItems = (items, currentPage, pageLimit) => {
  const itemsToDisplay = items.slice(
    pageLimit * (currentPage - 1),
    pageLimit * currentPage
  );

  return itemsToDisplay;
};

const calculateOrderTotal = machines => {
  let orderTotal = 0;
  machines
    .filter(
      machine =>
        machine !== null &&
        machine !== undefined &&
        machine.price !== null &&
        machine.quantity !== null
    )
    .map(machine => (orderTotal += machine.price * machine.quantity));
  return orderTotal;
};

const getProductsTitles = products =>
  products
    .filter(p => p !== null)
    .map(p => p.title)
    .join(", ");

const stringContains = (source, queryString) =>
  source.toLowerCase().includes(queryString.trim().toLowerCase());

const toCurrency = number => `$${(+number).toFixed(2)}`;
const toShortDate = dateStr => new Date(dateStr).toLocaleString("en-GB");

export {
  // Input
  handleInputChange,
  handleBlur,
  // Paginatiion
  updatePaginationState,
  changePageTo,
  handlePageDecrease,
  handlePageIncrease,
  filterCurrentPageItems,
  // Misc
  calculateOrderTotal,
  getProductsTitles,
  stringContains,
  toCurrency,
  toShortDate
};
