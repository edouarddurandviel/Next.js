"use client";
import { useAppDispatch } from "@app/storeSlices/hooks";
import { ModalPlaceholder, Modal, ButtonView } from "./styles";
import { stopEvent } from "@app/storeSlices/uiEvents/slices";

const Index = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  return (
    <Modal>
      <ModalPlaceholder>
        {children}
        <ButtonView
          onClick={() => {
            dispatch(stopEvent());
          }}
        >
          Close
        </ButtonView>
      </ModalPlaceholder>
    </Modal>
  );
};

export default Index;
