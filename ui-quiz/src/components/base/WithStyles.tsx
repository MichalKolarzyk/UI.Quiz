
const WithStyles = (Component: any, styles: string) => {
  return (props : any) => {
    return <Component {...props} className={styles} />;
  };
};

export default WithStyles;
