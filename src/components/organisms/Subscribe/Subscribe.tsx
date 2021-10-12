import { FC, ReactElement } from 'react';
import { NormalButton } from '@/components/atoms/Button/button.styles';
import { NormalInput } from '@/components/atoms/Input/input.styles';
import { Form, Animation } from './subscribe.styles';

const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: "cbdcfcb92fc46084d1b3b7949dffbec5-us5",
  server: "us5",
});


const Subscribe: FC = (): ReactElement => {
  const color = '#9052BC';
  const onClick = async () => {
    const inputEmail = document.getElementById('email') as HTMLInputElement;
    const response = await mailchimp.lists.addListMember('d1cca5a05d', {
      email_address: inputEmail.value,
      status: 'pending',
    });
    console.log(response)
  }
  return (
    <Form color={color}>
      <NormalInput id='email' placeholder="Your email address"/>
      <Animation>
        <NormalButton onClick={onClick} type='button'>
          subscribe
          <img src={"/static/icons/bell.svg"} />
        </NormalButton>
      </Animation>
    </Form>
  );
};

export default Subscribe;
