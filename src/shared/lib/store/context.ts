import { createContext } from 'react';
import type { StoreContextValue } from './types';

export const StoreContext = createContext<StoreContextValue | undefined>(undefined);
