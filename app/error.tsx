"use client";

type Props = {
  error: Error;
};

function Error({ error }: Props) {
  return <div>Error: {error.message}</div>;
}

export default Error;
