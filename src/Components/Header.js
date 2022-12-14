import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Header.css';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Table } from 'react-bootstrap';

const Header = () => {
    return (
        <div className=''>
            <div className='d-flex justify-content-between container'>
                <div className='w-50'>
                    <h1> Sojib</h1>
                </div>
                <Form.Select aria-label="Default select example" className='w-25'>
                    <option>  Eleritum  </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
                <Button variant="outline-secondary">Connect to wallect</Button>{' '}
       

            </div>
            <div className='notice'>
                <h5 className='text-center'>Notice</h5>
            </div>
            <div className='coustom'>
                <div className='container '>
                    <h1 className='h1-c'> Request testnet LINK</h1>
                    <p className='p-c'>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
                    <div className=' info'>
                        <div className='p-5'>
                        <p className='sojib '>Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.</p>
                            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                <Form.Label>wallect address</Form.Label>
                                <Form.Control type="email" placeholder="wallect email" />
                            </Form.Group>
                            <div className='d-flex'>
                                <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                                    <Form.Label>Request Type
                                    </Form.Label>
                                    <Form.Control type="email" placeholder="Request Type" />
                                </Form.Group>
                                <Form.Group className="mb-3 w-25 ms-5" controlId="formBasicEmail">
                                    <Form.Label>Coin</Form.Label>
                                    <Form.Control type="email" placeholder="25" />
                                </Form.Group>

                            </div>
                            <button className='btn btn-primary mt-2'> Submit</button> <br></br>
                            <button className='btn btn-primary mt-2'> ETH Transfer History </button>

                            <Table  className=' w-50'>
                                <thead>
                                    <tr>
                                        <th>SR</th>
                                        <th>Time</th>
                                        <th> Amount </th>
                                        <th>Hash</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>12:30 AM</td>
                                        <td>487	</td>
                                        <td>@4s8er5s5fe57rjmxnfuewrurks</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>10:30 AM	</td>
                                        <td>875</td>
                                        <td>sf7s7ers4e7r7wser</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>11:30 AM</td>
                                        <td>797</td>
                                        <td>se4s7er7</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>

            </div>
            <footer className='mt-5 text-center'> 
              <h5> All reserve by sojib</h5>
            </footer>
        </div>
    );
};

export default Header;