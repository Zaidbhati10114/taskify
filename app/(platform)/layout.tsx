import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        <NextTopLoader />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
