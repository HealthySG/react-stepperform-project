import './style.module.scss'
export const Form = ({ children, ...props }) => {
    return (
      <form style={{width:'40vw',height:'40vh'}}className="row" {...props} noValidate>
        {children}
      </form>
    );
  };