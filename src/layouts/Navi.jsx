import React from 'react';
import {Button, Container, Menu} from "semantic-ui-react";

const Navi = () => {
    return (
        <div>

            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item name={"Ana Sayfa"}/>
                    <Menu.Item name={"İş İlanları"}/>

                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Button black>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>

        </div>
    );
};

export default Navi;
