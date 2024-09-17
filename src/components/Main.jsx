function Main({ children }) {
  return (
    <main className="flex flex-col gap-y-10 mt-[2.4rem] md:grid md:grid-cols-2 gap-x-5">
      {children}
    </main>
  );
}

export default Main;
