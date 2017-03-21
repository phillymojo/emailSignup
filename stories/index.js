import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import EmailSignupContainer from '../src/components/EmailSignupContainer';
import EmailSignupForm from '../src/components/EmailSignupForm';
import EmailInput from '../src/components/EmailInput';
import DOBInput from '../src/components/DOBInput';
import GenderInput from '../src/components/GenderInput';
import SignupButton from '../src/components/SignupButton';
import PrivacyPolicy from '../src/components/PrivacyPolicy';

storiesOf('EmailSignup', module)
  .add('Email Signup Container', () => (
    <EmailSignupContainer />
  ))
  .add('Email Signup Form', () => (
    <EmailSignupForm registerRequiredInputs={() => false} />
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
