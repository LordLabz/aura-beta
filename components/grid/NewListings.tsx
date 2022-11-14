import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function NewListings() {
  const list = [
    {
      title: "Zombeze of Enlightenment",
      img: "/images/150.png",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/212.png",
      price: "$3.00",
    },
    {
      title: "Cherry",
      img: "/images/564.png",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/1244.png",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/3044.png",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "../../assets/images/5549.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "https://kroniclabz.mypinata.cloud/ipfs/Qmd9aLEQi7JbtdD9yxQGZqAJYnPbyfzSWHXsHF8GTNEB5w",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/6609.png",
      price: "$12.20",
    },
  ];

  return (
    <Grid.Container gap={10} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://nextui.org" + item.img}
                objectFit="cover"
                width="100%"
                height={200}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
