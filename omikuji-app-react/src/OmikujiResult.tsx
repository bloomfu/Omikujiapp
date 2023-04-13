import React from "react";

interface OmikujiResultProps {
  result: string;
}

const OmikujiResult: React.FC<OmikujiResultProps> = ({ result }) => {
  return <div>{result}</div>;
};

export default OmikujiResult;
