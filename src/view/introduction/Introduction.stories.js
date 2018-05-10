//@flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from './../hero/Hero';

const props: any = {};

storiesOf('Sections', module).add('hero', () => <Hero {...props} />);