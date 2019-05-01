import React from 'react';
import ReactDOM from 'react-dom';
import * as Service from '../../services/services';
import HomeView from './Home';
import {shallow, ShallowWrapper} from 'enzyme';

jest.mock('../../services/services');

describe("<HomeView />", () => {
    let homeView: ShallowWrapper;
    beforeEach(() => {
        homeView = shallow(<HomeView />);
    });

    it("should fetch story items", () => {
        return homeView.instance().componentDidMount().then( () => {
            expect(Service.fetchItems).toHaveBeenCalledWith("news");
        });
    });

    it("should render ListItem for all stories", () => {
        return homeView.instance().componentDidMount().then(() => {
            const listItems = homeView.find("ListItem");

            expect(listItems.length).toBe(2);
        });
    });
});
