import { Grid } from "@nextui-org/react";
import { Card1 } from './Card1';
import { Card2 } from './Card2';
import { Card3 } from './Card3';
import { Card4 } from './Card4';
import { Card5 } from './Card5';

export default function ListingCards() {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={7}>
        <Card5 />
      </Grid>
    </Grid.Container>
  );
}

