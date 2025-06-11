import React, { useContext } from 'react';
import { NavigationContext } from '@/shared/lib/navigation/context';
import { matchPath } from '@/shared/lib';

type RouteProps<P = {}> = {
  path: string;
  component: React.ReactElement<P>;
};

export const Route = <P extends {}>({ path, component }: RouteProps<P>) => {
  const { currentPath } = useContext(NavigationContext);
  const match = matchPath(path, currentPath);

  if (!match) return null;

  if (Object.keys(match.params).length === 0) {
    return component;
  }

  return React.cloneElement(component, {
    ...component.props, 
    params: match.params,
  });
};
