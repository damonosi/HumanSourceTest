import { Card, CardContent, CardMedia } from "@mui/material";

interface ICardParteneri {
  firma: string;
  descriere: string;
}

const CardParteneri = ({ firma, descriere }: ICardParteneri) => {
  return (
    <Card sx={{ maxWidth: 210 }}>
      <CardContent className="flex flex-col p-4 gap-4 shadow-parteneriShadow rounded-[10px] text-center ">
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

        <h2>{firma}</h2>
        <p className="max-w-[189px]">{descriere}</p>
      </CardContent>
    </Card>
  );
};

export default CardParteneri;
