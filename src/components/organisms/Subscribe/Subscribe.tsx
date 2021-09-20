import { FC, ReactElement } from 'react';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Form, Animation } from './subscribe.styles';

const Subscribe: FC = (): ReactElement => {
  const color = '#9052BC';
  return (
    <Form color={color}>
      <Input />
      <Animation>
        <Button text="Subscribe" iconPath="/static/icons/bell.svg" />
      </Animation>
    </Form>
  );
};

export default Subscribe;
