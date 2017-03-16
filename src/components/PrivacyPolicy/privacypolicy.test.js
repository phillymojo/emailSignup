import React from 'react';
import {shallow} from 'enzyme';
import PrivacyPolicy from './PrivacyPolicy';

describe('<PrivacyPolicy />', () => {
    it('PrivacyPolicy should render its html', () => {
        expect(shallow(<PrivacyPolicy />).find('.emailPrivacyPolicy').length).toEqual(1);
    });
});