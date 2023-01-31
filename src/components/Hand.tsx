import { HStack } from '@chakra-ui/react';
import { Card } from './Card';

interface HandProps {
  // TODO: Make these real cards
  cards: string[];
}

export const Hand = (props: HandProps) => {
  return (
    <HStack>
      {props.cards.map((card, key) => (
        <Card key={key} hoverBehavior='float' size='sm' entranceBehavior='draw' />
      ))}
    </HStack>
  );
};
