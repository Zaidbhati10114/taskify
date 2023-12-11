const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex p-10 items-center justify-center">
      {children}
    </div>
  );
};

export default ClerkLayout;
