import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="container mx-auto mt-10 text-center  pt-36 h-14">
      <div>
        {loading ? (
          <PulseLoader color="gray" />
        ) : (
          <>
            <h1 className="text-3xl font-bold text-green-600 mb-4">Success</h1>
            <p className="text-lg text-gray-700">
              Congratulations! Your action was successful.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Success;
