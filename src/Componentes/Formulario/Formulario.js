import "./Formulario.css"

const Formulario = () => {
    return ( 
        <div className="fondo">
            <div className="mt-3 fondoForm">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Texto</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3" >
                    <button type="submit" className="btn-white mb-3">Enviar</button>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;