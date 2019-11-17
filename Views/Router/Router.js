import {createStackNavigator} from "react-navigation-stack";
import RuangCendekiawan from "../Navigation/RuangCendekiawan";
import Info from "../Navigation/Info";
import KonselingKu from "../Navigation/KonselingKu";
import JobVacancy from "../Navigation/JobVacancy";
import {createAppContainer} from "react-navigation";
import Dashboard from "../Navigation/Dashboard";


import React from 'react';
import { StackNavigator } from 'react-navigation';

import RuangCendekiawan from '../../Views/Navigation/RuangCendekiawan';
import JobVacancy from '../../Views/Navigation/JobVacancy';
import KonselingKu from '../../Views/Navigation/KonselingKu';
import Info from '../../Views/Navigation/Info';


export const Root = StackNavigator({
    RuangCendekiawan: {
        screen: RuangCendekiawan
    },
    JobVacancy: {
        screen: JobVacancy
    },
    KonselingKu : {
        screen : KonselingKu
    },
    Info : {
        screen : Info
    }

}, {
    headerMode: 'none'
});