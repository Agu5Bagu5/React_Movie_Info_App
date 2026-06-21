import { TailSpin } from "react-loader-spinner";

const Loader = ({ size }) => {
  return (
    <div className="w-100 d-flex justify-content-center">
      <TailSpin
        height={size ? size : "50"}
        width={size ? size : "50"}
        color="#ececec"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
