import { VStack } from 'native-base'

import { Header } from '../components/Header'

export function Register() {

    return (
      <VStack flex={1} bg="gray.600" px={6}>
          <Header title="Nova solicitação" />
      </VStack>
    )
}