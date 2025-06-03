const compose = (...funcs: ((Component: React.ComponentType) => React.ComponentType)[]) => {
  return (Component: React.ComponentType) => {
    return funcs.reduceRight((WrappedComponent, func) => func(WrappedComponent), Component);
  };
};

export default compose;
