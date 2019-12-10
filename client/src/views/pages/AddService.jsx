import React from "react";
import axios from "axios";

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

class AddService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      image: "",
      serviceUrl: "",
      type: ""
    };

    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleServiceUrl = this.handleServiceUrl.bind(this);
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
  handleServiceUrl(event) {
    this.setState({ serviceUrl: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    const serviceToBeAdded = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image,
      serviceUrl: this.state.serviceUrl,
      type: this.state.type
    };

    axios
      .post("http://localhost:9949/services/add-service", serviceToBeAdded)
      .then(res => console.log(res.data));
    console.log(serviceToBeAdded);
    console.log(this.state);

    event.preventDefault();
    window.location = "/services";
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
                        <large>Add Service</large>
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
                              placeholder="Service Name"
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
                                <i className="ni ni-image" />
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
                                <i className="ni ni-align-center" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Type (Enterprise, Business, etc.)"
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
                                <i className="ni ni-world" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Service URL"
                              type="text"
                              name="serviceUrl"
                              autoComplete="off"
                              value={this.state.serviceUrl}
                              onChange={this.handleServiceUrl}
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
                            Add service
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

export default AddService;
