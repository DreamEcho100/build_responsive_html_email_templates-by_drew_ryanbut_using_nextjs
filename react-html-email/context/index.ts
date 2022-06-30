import { useState } from 'react';
import { createContainer } from 'react-tracked';
import reactHTMLEmailConfig from '../../reactHTMLEmailConfig';

const initialState = reactHTMLEmailConfig;

const useMyConfig = () => useState(initialState);

export const { Provider: SharedConfigProvider, useTracked: useSharedConfig } =
	createContainer(useMyConfig);
