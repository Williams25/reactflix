import React from 'react'
import {Link} from 'react-router-dom'

export default props => <Link className={props.className} to={props.to}>{props.children}</Link>