import React from 'react';

import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';

const ProfileCard = () =>
    <Card>
        <Card.Image size="4by3" src="https://placekitten.com/1280/960" />
        <Card.Content>
            <Media>
                <Media.Item renderAs="figure" position="left">
                    <Image renderAs="p" size={64} alt="64x64" src="https://placekitten.com/128/128" />
                </Media.Item>
                <Media.Item>
                    <Heading size={4}>John Smith</Heading>
                    <Heading subtitle size={6}>
                        @johnsmith
        </Heading>
                </Media.Item>
            </Media>
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
        <a href="#1">#css</a> <a href="#2">#responsive</a>
                <br />
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </Content>
        </Card.Content>
    </Card>

export default ProfileCard;