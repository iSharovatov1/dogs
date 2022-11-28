import { render } from '@testing-library/react';
import { Loader } from '../components/Loader';

test('renders learn react', () => {
  const component = render(Loader());
  expect(component).toMatchSnapshot();
});
