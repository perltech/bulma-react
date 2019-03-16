import React from 'react';

import Hero from 'react-bulma-components/lib/components/hero';
import Content from 'react-bulma-components/lib/components/content';

const SourceCodeHero = () => <Hero size="large" color="primary">
    <Hero.Head renderAs="header">
        <Content size="medium">
            <p>
                This Site has been built with love using React, Recompose, and Bulma
            </p>
            <p>
                Please see an example of this very component below ;P
            </p>
        </Content>
    </Hero.Head>
    <Hero.Body>
        <Content size="medium">
            <pre>
                <code>
                    <span>import </span>
                    <span>React </span>
                    <span>from </span>
                    <span>'react'</span>
                    <span>;</span>
                    <br />
                    <br />

                    <span>import </span>
                    <span>Hero </span>
                    <span>from </span>
                    <span>'react-bulma-components/lib/components/hero'</span>
                    <span>;</span>
                    <br />

                    <span>import </span>
                    <span>Content </span>
                    <span>from </span>
                    <span>'react-bulma-components/lib/components/content'</span>
                    <span>;</span>
                    <br />
                    <br />


                    <span>const </span>
                    <span>SourceCodeHero </span>
                    <span>= </span>
                    <span>(</span>
                    <span>) </span>
                    <span>=> </span>
                    <span>&lt;</span>
                    <span>Hero </span>
                    <span>size</span>
                    <span>=</span>
                    <span>"large" </span>
                    <span>color</span>
                    <span>=</span>
                    <span>"primary"</span>
                    <span>&gt;</span>
                    <br />
                </code>
            </pre>

        </Content>
    </Hero.Body>
    <Hero.Footer>
        <div className="bd-notification is-danger">Footer</div>
    </Hero.Footer>
</Hero>

export default SourceCodeHero;