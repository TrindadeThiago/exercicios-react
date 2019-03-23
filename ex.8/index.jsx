import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Trindade'>
        <Member name='Thiago' />
        <Member name='Diego' />
    </Family>
    , document.getElementById('app'))