import React  from 'react';
import PropTypes from 'prop-types';


const ColumnItem = (props) => (
    <li id={props.id} className="column">

        <p className="columnTitle">{props.title}</p>
       <img src="/images/line.png" alt="line"/>
        <ul className="columnList">
            {props.list.map(item => (
                <li key={item.id}>
                    <a href={item.href}>{item.title}</a>
                </li>
            ))}
        </ul>
    </li>
);

ColumnItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    href: PropTypes.string,
    list: PropTypes.array,
    className: PropTypes.string
};

ColumnItem.defaultProps = {
    list: [],
    id: '',
    title: '',
    href: ''
};

export default ColumnItem;

