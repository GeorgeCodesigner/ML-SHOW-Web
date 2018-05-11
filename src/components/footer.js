import React, { Component } from 'react';
import '../css/footer.css';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer className='footer-wrap'>
                <p style={{marginBottom:'3px'}}>此作品仅用于学习,不作商业用途</p>
                <p style={{marginBottom:'3px'}}>Produced by George Chen</p>
            </footer>
        );
    }
}