import React, { Component } from 'react';
import PropTypes from 'prop-types';
//@COMPONENTS
import ColumnItem from './ColumnItem';
// @STYLES
import './Columns.scss';
class ColumnList extends Component {

    static propTypes = {
        columnItems: PropTypes.array.isRequired,
        className: PropTypes.string
    };
    static defaultProps = { FooterItems: [] };

    render() {
        const { columnItems, className } = this.props;
        const list =  columnItems ? columnItems.map(item => (
                <ColumnItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    list={item.items}
                />
            )
        ) : <div>Foo list is empty</div>;
        return (
            <div className={className}>
                <ul className="columnsList">
                    {list}
                </ul>
            </div>
        );
    }
}

export default ColumnList;
