import React, { useState, useEffect } from "react";
import medicina from "/images/medicina.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const notify = () => toast("Wow so easy!");
  const [peso, setPeso] = useState("");
  const [dosis, setDosis] = useState("");
  const [resultado, setResultado] = useState("");
  const [mostrar, setMostrarResultados] = useState(false)

  const medicamentos = [
    { nombre: "Ácido fólico inyectable 10 mg / 1 ml", uso: "I.V / I.M" },
    { nombre: "Adrenalina (Epinefrina) 1 mg / 1 ml", uso: "I.V" },
    { nombre: "Ácido tranexámico 500 mg / 5 ml", uso: null },
    { nombre: "Ampicilina + Sulbactam 1,5 g", uso: "I.M / I.V" },
    { nombre: "Amikacina 500 mg/2ml", uso: "I.M / I.V" },
    { nombre: "Amikacina 100 mg / 2 ml", uso: null },
    { nombre: "Atropina sulfato 1 mg / 1 ml", uso: null },
    { nombre: "Betametasona 4 mg / ml", uso: null },
    { nombre: "Bromuro de Rocuronio 50 mg / 5ml", uso: null },
    { nombre: "Bupivacaína clorhidrato 50 mg / 10ml", uso: null },
    { nombre: "Ceftriaxona sódica 1g", uso: "I.M / I.V" },
    { nombre: "Cefalotina 1 g", uso: "I.M / I.V" },
    { nombre: "Cefepime 1 g", uso: "I.M / I.V" },
    { nombre: "Ciprofloxacina 200 mg / 100 ml", uso: "I.V" },
    { nombre: "Clindamicina USP 600 mg / 4 ml", uso: "I.M / I.V" },
    { nombre: "Clorfeniramina maleato 10 mg / 1 ml", uso: "I.V / I.M" },
    {
      nombre:
        "Clorhidrato de Bupivacaína 15 mg + Dextrosa anhidra 240 mg / 3 ml (Bupiglass Hiperbara)",
      uso: null,
    },
    { nombre: "Complejo B vitamina 2 ml", uso: "I.V / I.M" },
    { nombre: "Complejo multivitamínico Mabivit I.V", uso: null },
    { nombre: "Dexametasona fosfato 4 mg/ 1 ml", uso: "I.M / I.V" },
    { nombre: "Dexametasona 8 mg", uso: "I.V / I.M" },
    { nombre: "Diclofenac potásico 75 mg / 3 ml / I.M (Biofenap)", uso: null },
    { nombre: "Diclofenac sódico 75 mg / 3ml (Diclopil)", uso: null },
    { nombre: "Efedrina sulfato 6% 1 ml", uso: "I.V / I.M / Subcutánea" },
    { nombre: "Enoxoparina 60 mg / 0.6ml", uso: null },
    { nombre: "Esomeprazol 40 mg", uso: "I.V" },
    { nombre: "Fenitoína sódica 250 mg / 5 ml", uso: null },
    { nombre: "Fitomenadiona (Vit K) 10 mg / 1 ml", uso: null },
    { nombre: "Fluconazol inyección USP 200 mg / 100 ml / I.V", uso: null },
    { nombre: "Furosemida 20 mg/2ml inyección", uso: null },
    { nombre: "Gentamicina 40 mg / 2 ml", uso: "I.M / I.V" },
    { nombre: "Hidrocortisona 100 mg", uso: "I.M / I.V" },
    { nombre: "Hidrocortisona 500 mg", uso: "I.M / I.V" },
    { nombre: "Ketoprofeno 100 mg / 1ml", uso: "I.M" },
  ];

  const calcular = (e) => {
    e.preventDefault();
    if (peso === "" || dosis === "") {
      toast.error('Por favor llena todos los campos');
    }else {
      let operacion = peso * dosis;
      setResultado(operacion);
      setDosis("");
      setPeso("");
      setMostrarResultados(true); // Cambias el estado para mostrar el resultado
    }
  };

  return (
    <div className="bg-gradient-to-br  from-gradient1 to-gradient2 min-h-screen flex flex-col  items-center">
      <header className="flex flex-col items-center mt-10 space-y-3">
        <img src={medicina} width={50} alt="" />
        <h1 className="text-3xl text-result font-semibold">Dosis Pediatrica</h1>
      </header>

      {/* formulario */}

      <div className="sm:w-[360px] w-[375px]  h-[400px] ">
        <div className="mt-5">
          <select
            className="block w-full py-2 outline-1 outline-linea rounded-md text-gray-400"
            id="medicamentos"
          >
            {medicamentos.map((medicina) => {
              return (
                <option key={medicina.nombre} value={medicina.id}>
                  {medicina.nombre}
                </option>
              );
            })}
          </select>
        </div>
        <form>
          <div className="mt-5">
            <input
              type="number"
              className="py-2 rounded-md outline-1 id=peso name=peso outline-linea w-full px-3 text-1xl"
              value={peso}
              onChange={(e) => setPeso(parseInt(e.target.value))}
              placeholder="Indique el peso"
              onFocus={()=>setMostrarResultados(false)}
              
            />
          </div>
          <div className="mt-5">
            <input
              type="number"
              className="py-2 rounded-md outline-1 id=dosis name=dosis  outline-linea w-full px-3 text-1xl"
              placeholder="Indique la dosis en cc"
              value={dosis}
              onChange={(e) => setDosis(parseInt(e.target.value))}
              onFocus={()=>setMostrarResultados(false)}
            />
          </div>
          {/* <div className="mt-5">
            <input
              type="text"
              className="py-2 rounded-md outline-1 outline-linea w-full px-3 text-1xl"
              placeholder="20.2"
            />
          </div> */}

          <div className="mt-4">
            {mostrar && <p className="text-2xl text-result font-semibold text-center py-3">La dosis es de: {resultado}ml</p>}
            <button
              type="submit"
              className="bg-primary6 rounded-md uppercase py-2 w-full text-texto  hover:bg-gradien_Bottom hover:shadow-xl font-semibold shadow-lg transition-all duration-300"
              onClick={calcular}
            >
              calcular
            </button>
          </div>
        </form>
      </div>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer 
      hideProgressBar
      theme="dark"
      autoClose={3000}/>
      
    </div>
  );
};

export default App;
