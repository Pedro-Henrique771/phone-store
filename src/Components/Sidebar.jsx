const Sidebar = () => {
  return (
    <article className="sidebar">
        <h2>Filtre o produto que deseja</h2>
        <div>
            <h3>Valor:</h3>
            <div className="valor">
                <label htmlFor="valor-min">Mín
                <input type="number" name="" id="valor-min" /></label>

                <label htmlFor="valor-max">Máx
                <input type="number" name="" id="valor-max" /></label>
            </div>
            <div className="marca">
                <h3>Marcas:</h3>
                <label htmlFor="xiaomi"> 
                    <input type="checkbox" name="" id="xiaomi" />
                    Xiaomi
                </label>
                <label htmlFor="iphone">
                    <input type="checkbox" name="" id="iphone" />
                    Iphone
                </label>
                <label htmlFor="samsumg">
                    <input type="checkbox" name="" id="samsumg" />
                    Samsumg
                </label>
                <label htmlFor="motorola">
                    <input type="checkbox" name="" id="motorola" />
                    Motorola
                </label>
                <label htmlFor="lg">
                    <input type="checkbox" name="" id="lg" />
                    LG
                </label>
                <label htmlFor="realme">
                    <input type="checkbox" name="" id="realme" />
                    Realme
                </label>
            </div>
        </div>
    </article>
  )
}

export default Sidebar
