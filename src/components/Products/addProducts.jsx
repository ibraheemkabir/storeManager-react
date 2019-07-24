import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Modal, Form, Select } from 'semantic-ui-react';
import { addProducts } from '../../actions/DetailActions';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: '',
        category: 'shoes',
        price: '',
        quantity: '',
        image: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handelAdd = this.handelAdd.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  handleChanged = (e, data) => {
    console.log(e.target);
  };

  handleChange(event) {
    const { values } = this.state;
    const { name, value } = event.target;
    values[name] = value;
    this.setState({
      values
    });
  }

  handleImage() {
    const image = document.getElementById('image').files[0];
    this.setState({
      values: {
        ...this.state.values,
        image
      }
    });
  }

  handelAdd() {
    const { values } = this.state;
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('category', values.category);
    formData.append('price', values.price);
    formData.append('quantity', values.quantity);
    formData.append('image', values.image);
    this.props.addProducts(formData);
    this.setState({
      values
    });
  }

  componentDidMount() {}

  render() {
    const { Trigger, categories } = this.props;
    const options = [];
    if (categories.categories) {
      categories.categories.forEach((Element) => {
        options.push({ key: Element.id, value: Element.category, text: Element.category });
      });
    }

    return (
      <Modal trigger={Trigger}>
        <Modal.Header>Add a new product</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <p>Enter the Product Details</p>
            <Form>
              <Form.Field>
                <label>Product Name</label>
                <input name="name" placeholder="Product Name" onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Product Category</label>
                <Select
                  name="category"
                  onClick={this.handleChanges}
                  onChange={this.handleChanged}
                  placeholder="Select a category"
                  options={options}
                />
              </Form.Field>
              <Form.Field>
                <label>Price/unit</label>
                <input name="price" placeholder="Price/unit" onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Quantity</label>
                <input name="quantity" placeholder="Quantity" onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>product Image</label>
                <input type="file" id="image" onChange={this.handleImage} />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={this.handelAdd}>
            Add Product
            <Icon name="right chevron" />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.fetchcategoriesreducer.response
});

export { addProducts as products };
export default connect(
  mapStateToProps,
  { addProducts }
)(Products);
