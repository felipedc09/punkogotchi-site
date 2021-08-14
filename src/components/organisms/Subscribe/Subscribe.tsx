import { FC, ReactElement } from 'react';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { Form } from './subscribe.styles';

const Subscribe: FC = (): ReactElement => {
  const color = '#9052BC';
  return (
    <Form color={color}>
      <Input />
      <Button text="Subscribe" color={color} iconPath="/static/icons/bell.svg" />
    </Form>
  );
};

export default Subscribe;
