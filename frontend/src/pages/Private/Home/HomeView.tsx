import { useRef } from "react";
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function HomeView(): JSX.Element {
  const carousel = useRef<null | HTMLDivElement>(null);

  const images = [
    "public/banner-01.jpg",
    "public/banner-02.jpg",
    "public/banner-03.jpg",
    "public/banner-04.jpg",
    "public/banner-05.jpg",
  ];

  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  return (
    <main>
      <section id="banners">
        <Swiper
          modules={[EffectFade]}
          effect="fade"
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
        >
          {images.map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section id="cardapio">
        <section id="subtitle-buttons">
          <h2>Cardápio</h2>

          <div id="buttons">
            <IconButton className="icone" onClick={handleLeftClick}>
              <ArrowBack />
            </IconButton>

            <IconButton className="icone" onClick={handleRightClick}>
              <ArrowForward />
            </IconButton>
          </div>
        </section>

        <article id="container-carousel">
          <div id="carousel" ref={carousel}>
            <Card sx={{ maxWidth: 300 }} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="public/banner-02.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pizza
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    R$ 20,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 300 }} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="public/banner-02.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pizza
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    R$ 20,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 300 }} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="public/banner-02.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pizza
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    R$ 20,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 300 }} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="public/banner-02.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pizza
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    R$ 20,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 300 }} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="public/banner-02.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pizza
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    R$ 20,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 300 }} className="card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image="public/banner-02.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pizza
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    R$ 20,00
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </article>
      </section>
    </main>
  );
}
