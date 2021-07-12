import React from 'react';

const ListGroup = (props) => {
   const {items, textProperty, valueProperty, onItemSelect, selectedItem} = props;
    return ( 
        
        <ul className="list-group">
            <li onClick={() => onItemSelect({name: 'All'})} className={selectedItem.name ==='All' ? "list-group-item active": "list-group-item"} style={{cursor: 'pointer'}}>All </li>
            { items.map(item => <li onClick={() => onItemSelect(item)} style={{cursor: 'pointer'}}
             key={item[valueProperty]} 
             className={selectedItem.name === item.name ? "list-group-item active" : "list-group-item"}>{item[textProperty]}</li> )}
        </ul>
     );
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}
 
export default ListGroup;