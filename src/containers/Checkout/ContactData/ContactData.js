import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state ={
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Grady Zabre',
                address: {
                    street: 'Oackfort',
                    zipcode: '19146',
                    country: 'USA'
                },
                email: 'test@gmail.com'
            },
            deliveryMethod: 'faster'
        }
        axios.post('/orders.json', order)
            .then(Response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
                
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render () {
        let form = (
            <form>
                <Input inputtype="input" type="text" name="name" placeholder="your Name" />
                <Input inputtype="input" type="text" name="name" placeholder="your Mail" />
                <Input inputtype="input" type="text" name="name" placeholder="Street" />
                <Input inputtype="input" type="text" name="postal" placeholder="Postal" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if(this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;