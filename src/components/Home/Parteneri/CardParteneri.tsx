import { Typography } from "@material-tailwind/react";
import { Card, CardContent, CardMedia } from "@mui/material";

interface ICardParteneri {
  firma: string;
  descriere: string;
}

const CardParteneri = ({ firma, descriere }: ICardParteneri) => {
  return (
    <Card sx={{ maxWidth: 210 }}>
      <CardContent className="flex flex-col gap-4 rounded-[10px] p-4 text-center shadow-parteneriShadow ">
        {firma === "Giorna" && (
          <CardMedia
            sx={{ height: 112 }}
            image="/imagini/giorna.png"
            title="imagine-firma"
          />
        )}
        {firma === "Oil Part" && (
          <CardMedia
            sx={{ height: 112 }}
            image="/imagini/oil.png"
            title="imagine-firma"
          />
        )}
        {firma === "TF" && (
          <CardMedia
            sx={{ height: 112 }}
            image="/imagini/tf.png"
            title="imagine-firma"
          />
        )}
        {firma === "Dacia" && (
          <CardMedia
            sx={{ height: 112 }}
            image="/imagini/dacia.png "
            title="imagine-firma"
          />
        )}
        {firma === "UVM" && (
          <CardMedia
            sx={{ height: 112 }}
            image="/imagini/uvm.png "
            title="imagine-firma"
          />
        )}

        <Typography variant="h2">{firma}</Typography>
        <Typography variant="paragraph">{descriere}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardParteneri;
