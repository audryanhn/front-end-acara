import PageHead from "@/components/commons/PageHead";
import { ReactNode } from "react";

interface propTypes {
  title: string;
  children: ReactNode;
}

const AuthLayout = (props: propTypes) => {
  const { title, children } = props;
  return (
    <>
      <PageHead title={title}></PageHead>
      <section className="3xl:container max-w-3xl p-6">{children}</section>
    </>
  );
};

export default AuthLayout;
