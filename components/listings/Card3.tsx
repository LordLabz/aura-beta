import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card3 = () => (
  <Card css={{ w: "35%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
      </Col>
    </Card.Header>
    <Card.Body css={{  p: 0, background: "#16181A" }}>
      <Card.Image
        src="https://kroniclabz.mypinata.cloud/ipfs/QmYSARWJqEqNgVxfxTb8XP2dHyhDNWHLouSfCzYxANbUU2/200k%20ZOE.gif"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
  </Card>
);
