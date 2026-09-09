import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { OrderForm } from "./OrderForm";

export function RequestDialog({ dialogState, onClose }) {
  return (
    <Dialog.Root open={dialogState.isOpen} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="request-dialog__overlay" />
        <Dialog.Content className="request-dialog__content">
          <Dialog.Close className="request-dialog__close" aria-label="Закрыть">
            <X aria-hidden="true" />
          </Dialog.Close>
          <Dialog.Title className="request-dialog__title">{dialogState.title}</Dialog.Title>
          <Dialog.Description className="request-dialog__description">
            Укажите параметры заказа. Менеджер подготовит ответ по выбранному фреону.
          </Dialog.Description>
          <OrderForm compact initialRefrigerant={dialogState.refrigerant} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
