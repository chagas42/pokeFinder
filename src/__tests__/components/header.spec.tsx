import React from 'react';
import { render } from '@testing-library/react-native'
import { Header } from '../../components/Header';


describe('Header Component:', () => {

  it('should render name correctly', () => {

    const { getByTestId } = render(<Header/>)

    const nameId = getByTestId('name');

    expect(nameId.props.children).toEqual('Júnior Chagas');

  })

  it('should render image element correctly', () => {

    const { getByTestId } = render(<Header/>);

    const imageId = getByTestId('image');

    expect(imageId).toBeTruthy();

  })

});