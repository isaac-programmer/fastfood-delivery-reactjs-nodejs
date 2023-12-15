import { Typography } from "@mui/material";
import "./index.scss";

export default function NoContentView(): JSX.Element {

  return (
    <section id="no-content">
      <Typography>
        Nenhum conteúdo encontrado!
      </Typography>
    </section>
  );
}
