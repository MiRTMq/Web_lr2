import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Body = ({children}:Props) => {
  


    return (
      <>
        <div className='container flexGrow-1'
          style={{ height: '100vh' }} >
          {children}
        </div>
      </>

    )
  }

export default Body;
