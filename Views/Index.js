import * as React from "react";
import {AsyncStorage} from "react-native-web";
import {Stack, Scene, Router} from "react-native-router-flux";
import Dashboard from "./Navigation/Dashboard";
import Info from "./Navigation/Info";
import JobVacancy from "./Navigation/JobVacancy";
import KonselingKu from "./Navigation/KonselingKu";
import RuangCendikiawan from "./Navigation/RuangCendekiawan";

export default class Index extends React.Component{

    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar="true">
                    <Scene initial={true} key="DashboardScreen" component={Dashboard} title="DashboardScreen"/>
                    <Scene key="InfoScreen" component={Info} title="InfoScreen"/>
                    <Scene key="JobVacancyScreen" component={JobVacancy} title="JobVacancyScreen"/>
                    <Scene key="KonselingKuScreen" component={KonselingKu} title="KonselingKuScreen"/>
                    <Scene key="RuangCendikiawanScreen" component={RuangCendikiawan} title="RuangCendikiawanScreen"/>
                </Stack>
            </Router>
        );
    }

}