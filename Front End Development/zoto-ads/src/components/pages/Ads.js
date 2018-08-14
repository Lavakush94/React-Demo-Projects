import React from 'react';
import GeneralSettings from '../forms/GeneralSettings';
import TargettingOption from '../forms/TargettingOption';
import ScheduleCost from '../forms/ScheduleCost';

export default class Ads extends React.Component{
    render(){
        return(
            <div>
                <GeneralSettings /> <br />
                <TargettingOption /> <br />
                <ScheduleCost /> <br />
            </div>
        )
    }
}