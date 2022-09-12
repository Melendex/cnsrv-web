import './css/variables.css';
import './css/FormInfoContacto.css';

function FormInfoContacto() {
    const sizeSVG = 40;
    return (
        <>
            <div className="container">
                <div className="row m-3 align-items-center">
                    <div className="col-sm-12 col-md-1 menu-lat-left align-items-center">
                        <div className="container align-items-center h-100">
                            <div className="row align-items-center">
                                <div className='col conf-icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={sizeSVG} height={sizeSVG} fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                </div>
                                <div className='col  conf-icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={sizeSVG} height={sizeSVG} fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                                    </svg>
                                </div>
                                <div className="col  conf-icons">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={sizeSVG} height={sizeSVG} fill="currentColor" class="bi bi-calendar-date-fill" viewBox="0 0 16 16">
                                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                                        <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-11 p-5" style={{ backgroundColor: '#CCC' }}>
                        <div className="container">
                            <h3>Formulario</h3>
                            <div className="row align-items-center p-5" style={{ backgroundColor: '#FFF' }}>
                                <h4>Información de contacto</h4>
                                <div className="col-sm-12 col-md-9">
                                    <span>Nombre</span>
                                    <br />
                                    <input type="text" name="" value="" />
                                    <br />
                                    <span>Apellido</span>
                                    <br />
                                    <input type="text" name="" value="" />
                                    <br />
                                    <span>Estado</span>
                                    <br />
                                    <input type="text" name="" value="" />
                                    <br />
                                    <span>Municipio</span>
                                    <br />
                                    <input type="text" name="" value="" />
                                </div>

                                <div className="col-sm-12 col-md-3">
                                    <span>Fecha de Nacimiento</span>
                                    <input type="date" name="" value="" />
                                    <span>Teléfono</span>
                                    <input type="number" name="" value="" />
                                    <span>Teléfono Alterno</span>
                                    <input type="number" name="" value="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3" style={{ maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                <div class="row g-0 m-auto">
                    <div class="col-sm-12 col-md-1 menu-lat-left align-items-center">
                        <div className='col col-sm-4 col-md-12 conf-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={sizeSVG} height={sizeSVG} fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                        </div>
                        <div className='col col-sm-4 col-md-12 conf-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={sizeSVG} height={sizeSVG} fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                            </svg>
                        </div>
                        <div className="col col-sm-4 col-md-12  conf-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" width={sizeSVG} height={sizeSVG} fill="currentColor" class="bi bi-calendar-date-fill" viewBox="0 0 16 16">
                                <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z" />
                                <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z" />
                            </svg>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-11 p-5">
                        <div class="card-body">
                            <h3>Formulario</h3>
                            <div className="row align-items-center p-5" style={{ backgroundColor: '#FFF' }}>
                                <h4>Información de contacto</h4>
                                <div className="col-sm-12 col-md-9">
                                    <span>Nombre</span>
                                    <br />
                                    <input type="text" name="" value="" />
                                    <br />
                                    <span>Apellido</span>
                                    <br />
                                    <input type="text" name="" value="" />
                                    <br />
                                    <span>Estado</span>
                                    <br />
                                    <input type="text" name="" value="" />
                                    <br />
                                    <span>Municipio</span>
                                    <br />
                                    <input type="text" name="" value="" />
                                </div>

                                <div className="col-sm-12 col-md-3">
                                    <span>Fecha de Nacimiento</span>
                                    <input type="date" name="" value="" />
                                    <span>Teléfono</span>
                                    <input type="number" name="" value="" />
                                    <span>Teléfono Alterno</span>
                                    <input type="number" name="" value="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default FormInfoContacto;