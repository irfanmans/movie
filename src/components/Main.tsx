import type MainProps from "../interface/Main";

export default function Main({ children }: MainProps) {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
}
