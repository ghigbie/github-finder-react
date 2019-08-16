import React, {Fragment} from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
     <Fragment className="Spinner">
            <img src={spinner} 
                 alt="loading" 
                 style={{ width: '200px', margin: 'auto', display: 'block'}}/>
        </Fragment>
);

export default Spinner;