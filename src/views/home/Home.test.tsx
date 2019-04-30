import React from 'react';
import ReactDOM from 'react-dom';
import HomeView from './Home';

describe("<HomeView />", () => {
    it('renders HomeView', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomeView />, div);
        
        expect(div).toMatchSnapshot();
        ReactDOM.unmountComponentAtNode(div);
    });
});
