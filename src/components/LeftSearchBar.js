import React from 'react';

import SearchField from 'react-search-field';

const searchbar = props => (
    <div style={{ position: 'absolute', zIndex: '9' , paddingLeft: '15px', paddingTop: '15px'}}>
       <SearchField 
            placeholder='Search item'
            onSearchClick={props.onSearchClick}
        />
    </div>
);

export default searchbar;