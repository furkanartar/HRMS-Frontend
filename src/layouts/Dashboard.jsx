import React from 'react';
import {Grid} from "semantic-ui-react";
import Categories from "./Categories";
import JobAdvertismentsList from "../pages/JobAdvertismentsList";

const Dashboard = () => {
    return (
        <div>
            <Grid>

                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={12}>
                        <JobAdvertismentsList/>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </div>
    );
};

export default Dashboard;
