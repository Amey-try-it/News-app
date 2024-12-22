import React from 'react';
import NewsList from './components/NewsList';

const App = () => {
    return (
        <div>
            <header>
                <h1>News Application</h1>
            </header>
            <main>
                <NewsList />
            </main>
        </div>
    );
};

export default App;
