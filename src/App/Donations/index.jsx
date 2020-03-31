/* eslint-disable no-undef */
import React from 'react';
import { Donation } from './Donation';
// import { Dropdown } from '../../components/Dropdown';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const CLASSNAME = 'donations';
const options = [
    {key: 'donation', label: 'Donation'},
    {key: 'communitypot', label: 'Community Pot'}
];
const defaultOption = options[0];

const Donations = ({ donations }) => {
    React.useLayoutEffect(() => {
        if (typeof twttr !== 'undefined' && twttr && twttr.widgets && twttr.widgets.load) {
            twttr.widgets.load();
        }
    });

    return (
        <section className={CLASSNAME}>
            <Dropdown options={options} value={defaultOption} placeholder="Select an option" multiple/>
            <div className={`${CLASSNAME}__list`}>
                {
                    donations.map((donation) => (
                        <Donation key={donation.id} {...donation} />
                    ))
                }
            </div>
        </section>

    );
};

export { Donations };