import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
// import Button from './Button';
// import Welcome from './Welcome';
import EmailSignupContainer from '../src/components/EmailSignupContainer';
import EmailSignupForm from '../src/components/EmailSignupForm';
import EmailInput from '../src/components/EmailInput';
import DOBInput from '../src/components/DOBInput';
import GenderInput from '../src/components/GenderInput';
import SignupButton from '../src/components/SignupButton';
import PrivacyPolicy from '../src/components/PrivacyPolicy';

// storiesOf('Welcome', module)
//   .add('to Storybook', () => (
//     <Welcome showApp={linkTo('Button')}/>
//   ));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
//   ));

storiesOf('EmailSignup', module)
  .add('Email Signup Container', () => (
    <EmailSignupContainer />
  ))
  .add('Email Signup Form', () => (
    <EmailSignupForm />
  ))
  .add('Email Input', () => (
    <EmailInput />
  ))
  .add('DOB Input', () => (
    <DOBInput />
  ))
  .add('Gender Input', () => (
    <GenderInput />
  ))
  .add('Signup Button', () => (
    <SignupButton />
  ))
  .add('Privacy Policy', () => (
    <PrivacyPolicy />
  ))
