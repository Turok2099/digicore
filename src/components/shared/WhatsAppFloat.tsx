import { MessageCircle } from "lucide-react";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

export default function WhatsAppFloat() {
  return (
    <WhatsAppLink
      ubicacion="flotante"
      aria-label="Escríbenos por WhatsApp (se abre en una pestaña nueva)"
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-on-accent shadow-md transition-colors hover:bg-whatsapp-hover sm:right-6"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </WhatsAppLink>
  );
}
