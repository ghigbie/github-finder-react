import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Repos = ({ repos }) => {
    console.log('Repos: ', repos);
    return (
        <div>
    
            { repos.map((repo) => {
                return <RepoItem repo={repo} key={repo.id} />
            })}

        </div>
    );
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}

export default Repos
