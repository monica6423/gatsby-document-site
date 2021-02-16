import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/i18n';
import { Provider } from "react-redux"
import createStore from './src/store'

const store = createStore()

const wrapRootElement = ({ element }) => (
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
        {element}
        </I18nextProvider>
    </Provider>
);

export default wrapRootElement;