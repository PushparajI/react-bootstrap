import React from 'react';
import Sample from './sample';

export default function Demo() {
    let value = 12;
    return <div>{value}
        <Sample />
    </div>;
}