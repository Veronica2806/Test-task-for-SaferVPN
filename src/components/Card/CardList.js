import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';
class CardList extends Component {

    static propTypes = {
        cardItem: PropTypes.array.isRequired,
        className: PropTypes.string
    };
    static defaultProps = { cardItem: [] };

    render() {
        const { cardItem, className} = this.props;
        const list =  cardItem ? cardItem.map(item => (
                <CardItem
                    key={item.id}
                    id={item.id}
                    src={item.src}
                    title={item.title}
                    text={item.text}
                />
            )
        ) : <div>List is empty</div>;
        return (
            <div className={className}>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}



export default CardList;