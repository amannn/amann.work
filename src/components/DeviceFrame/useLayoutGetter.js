export default function useLayoutGetter(actualWidth, originalWidth) {
  return function getLayoutProps(template) {
    if (!actualWidth) return {visibility: 'hidden'};

    const scale = actualWidth / originalWidth;

    const props = {};
    Object.keys(template).forEach(key => {
      props[key] = template[key] * scale;
    });

    return props;
  };
}
