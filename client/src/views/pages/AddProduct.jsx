import React from "react";
import axios from "axios";
import { dbConstants } from "../../constants/constants";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      image: "",
      productUrl: "",
      type: ""
    };

    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleProductUrl = this.handleProductUrl.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleDescription(event) {
    this.setState({ description: event.target.value });
  }
  handleImage(event) {
    this.setState({ image: event.target.value });
  }
  handleType(event) {
    this.setState({ type: event.target.value });
  }
  handleProductUrl(event) {
    this.setState({ productUrl: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    const productToBeAdded = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      productUrl: this.state.productUrl,
      type: this.state.type
    };

    axios
      .post(dbConstants.addProductsUrl, productToBeAdded)
      .then(res => console.log(res.data));
    console.log(productToBeAdded);
    console.log(this.state);

    event.preventDefault();
    window.location = "/products";
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-md">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-center text-muted mb-4">
                        <large>Add Product</large>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Details</small>
                      </div>
                      <Form role="form" onSubmit={this.handleSubmit}>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-single-copy-04" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Vendor"
                              type="text"
                              name="name"
                              value={this.state.name}
                              onChange={this.handleName}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-single-copy-04" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Description"
                              type="text"
                              name="description"
                              value={this.state.description}
                              onChange={this.handleDescription}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-single-copy-04" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Image"
                              type="text"
                              name="image"
                              value={this.state.image}
                              onChange={this.handleImage}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Type (HW, Banking, HCI, etc.)"
                              type="type"
                              name="type"
                              value={this.state.type}
                              onChange={this.handleType}
                            />
                          </InputGroup>
                        </FormGroup>

                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-watch-time" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Product URL"
                              type="text"
                              name="productUrl"
                              autoComplete="off"
                              value={this.state.productUrl}
                              onChange={this.handleProductUrl}
                            />
                          </InputGroup>
                        </FormGroup>

                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="default"
                            type="submit"
                            // to="/dashboard" tag={Link}
                          >
                            Add product
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default AddProduct;
