import "./index.scss";
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import useAuthContext from "../../context/Auth/hook";
import { Link } from "react-router-dom";

export default function HeaderView(): JSX.Element {
  const { userRole } = useAuthContext();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>

          {userRole != "admin" ? (
            <li>
              <a href="#cardapio">Cardapio</a>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </nav>

      {userRole != "admin" ? (
        <IconButton>
          <Badge badgeContent={4} color="warning">
            <ShoppingCart sx={{ color: "#59320F" }} />
          </Badge>
        </IconButton>
      ) : (
        <></>
      )}
    </header>
  );
}
