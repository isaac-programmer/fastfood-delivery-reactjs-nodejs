import "./index.scss";
import { Link } from "react-router-dom";
import useAuthContext from "../../context/Auth/hook";
import { Logout, ShoppingCart } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import useShoppingCartContext from "../../context/ShoppingCart/hook";

export default function HeaderView(): JSX.Element {
  const { userRole, logout } = useAuthContext();
  const { qtdProductsInCart } = useShoppingCartContext();

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

      <div id="icons-header">
        {userRole != "admin" ? (
          <IconButton>
            <Badge badgeContent={qtdProductsInCart} color="warning">
              <ShoppingCart sx={{ color: "#59320F" }} />
            </Badge>
          </IconButton>
        ) : (
          <></>
        )}

        <Tooltip
          title="Sair"
          placement="bottom"
          onClick={() => {
            logout();
          }}
        >
          <IconButton>
            <Logout sx={{ color: "#59320F" }} />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
}
