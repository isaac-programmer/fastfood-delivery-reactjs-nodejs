import "./index.scss";
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export default function HeaderView(): JSX.Element {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/" className="active">Home</a>
          </li>
          <li>
            <a href="#cardapio">Cardapio</a>
          </li>
        </ul>
      </nav>

      <IconButton>
        <Badge badgeContent={4} color="warning">
          <ShoppingCart sx={{ color: "#59320F" }} />
        </Badge>
      </IconButton>
    </header>
  );
}
