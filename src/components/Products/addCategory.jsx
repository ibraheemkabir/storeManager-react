import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Icon, Divider, Modal, Form, Input, List } from 'semantic-ui-react';
import { fetchCategories, addCategories } from '../../actions/DetailActions';

class addProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        category: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.addNewCategory = this.addNewCategory.bind(this);
  }

  componentWillMount() {
    this.props.fetchCategories();
  }

  addNewCategory() {
    const { values } = this.state;
    this.props.addCategories(values);
    this.props.fetchCategories();
    this.setState({
      values
    });
  }

  handleChange(event) {
    const { values } = this.state;
    const { name, value } = event.target;
    values[name] = value;
    this.setState({
      values
    });
  }

  render() {
    const { Trigger, categories } = this.props;
    const { values } = this.state;
    return (
      <Modal trigger={Trigger}>
        <Modal.Header>Add a new Category</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <p>Enter the Category Details</p>
            <Form>
              <Form.Field>
                <Input
                  action={(
                    <Button basic floating onClick={() => this.addNewCategory()}>
                      Add Category
                    </Button>
)}
                  icon="search"
                  iconPosition="left"
                  placeholder="Category"
                  name="category"
                  floated="right"
                  value={values.category}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
            <Divider horizontal>
              <Header as="h4">
                <Icon name="tag" />
                Categories
              </Header>
            </Divider>
            {categories
              ? categories.categories.map(Element => (
                <List divided verticalAlign="middle">
                  <List.Item>
                    <List.Content floated="right">
                      <Button icon color="red">
                        <Icon name="trash" />
                      </Button>
                    </List.Content>
                    <Icon name="tag" />
                    <List.Content>{Element.category}</List.Content>
                  </List.Item>
                </List>
              ))
              : null}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.fetchcategoriesreducer.response
});

export { addProducts as productDetails };
export default connect(
  mapStateToProps,
  { fetchCategories, addCategories }
)(addProducts);
