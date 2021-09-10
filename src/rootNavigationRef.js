// RootNavigation.js

import * as React from 'react';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();


export function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.current?.navigate(name, params);
    } else {
        // You can decide what to do if react navigation is not ready
        // You can ignore this, or add these actions to a queue you can call later
    }
}