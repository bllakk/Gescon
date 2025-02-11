export default function Nav() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* ---------------------- AVATAR ---------------------- */}
        <div className="avatar ml-6 gap-4 items-center border-b border-zinc-700 pb-5">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <h1 className="font-bold text-xl">Gyan Monteiro</h1>
        </div>
        {/* ---------------------- AVATAR ---------------------- */}

        {/* ---------------------- MENU ---------------------- */}
        <ul className="menu bg-base-200 rounded-box w-56">
          <li>
            <details>
              <summary>Dashboard</summary>
              <ul>
                <li>
                  <a>Item-1</a>
                </li>
                <li>
                  <a>Item-2</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Procedimentos</summary>
              <ul>
                <li>
                  <a>Item-1</a>
                </li>
                <li>
                  <a>Item-2</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>GESCON</summary>
              <ul>
                <li>
                  <details>
                    <summary>Pedidos</summary>
                    <ul>
                      <li>
                        <a>Painel de Pedidos</a>
                      </li>
                      <li>
                        <a>Produtos Pendentes</a>
                      </li>
                      <li>
                        <a>Pendências por Produto</a>
                      </li>
                      <li>
                        <a>Pendências por Clientes</a>
                      </li>
                      <li>
                        <a>Relatório</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Licitação</summary>
              <ul>
                <li>
                  <a>Item-1</a>
                </li>
                <li>
                  <a>Item-2</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Logística</summary>
              <ul>
                <li>
                  <a>Item-1</a>
                </li>
                <li>
                  <a>Item-2</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Compras</summary>
              <ul>
                <li>
                  <a>Item-1</a>
                </li>
                <li>
                  <a>Item-2</a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <summary>Sistemas</summary>
              <ul>
                <li>
                  <a>Item-1</a>
                </li>
                <li>
                  <a>Item-2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        {/* ---------------------- MENU ---------------------- */}
      </ul>
    </div>
  );
}
