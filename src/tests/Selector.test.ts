import { render } from '@testing-library/react';
import { Selector } from '../components/Selector';

test('renders learn react link', () => {
  const component = render(Selector({
    fields: [],
  }));
  expect(component).toMatchSnapshot();
});
