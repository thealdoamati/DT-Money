import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>
            {/* Faço isso para essa parte dentro do portal, ficar em outro elemento DOM */}
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <Dialog.Close />
              </Dialog.Content>

            </Dialog.Portal>
          </Dialog.Root>
       
      </HeaderContent>
    </HeaderContainer>
  );
}