import React, { useState, useEffect } from "react";

const FunctionExam = () => {
  const [test, setTest] = useState({ test1: 1 });

  useEffect(() => {
    setTest({ ...test, test2: 2 });
  }, []);

  return <div>element</div>;
};

export default FunctionExam;
