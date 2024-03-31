import React, { useState, useEffect } from "react";
import medicina from "/images/medicina.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const notify = () => toast("Wow so easy!");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");
  const [redondeo, setRedondeo] = useState("");
  const [mostrar, setMostrarResultados] = useState(false);
  const [resultadoDivision, setResultadoDivision] = useState(null); // Estado para almacenar el resultado de la división
  const [selectedOption, setSelectedOption] = useState('');


  const medicamentos = [
    { nombre: "Seleccione" },
    { nombre: "Apiret Acetaminofen 180 mg / 5 ml" },
    { nombre: "Ácido fólico inyectable 10 mg / 1 ml" },
    { nombre: "Adrenalina (Epinefrina) 1 mg / 1 ml" },
    { nombre: "Ácido tranexámico 500 mg / 5 ml"},
    { nombre: "Ampicilina + Sulbactam 1,5 g"},
    { nombre: "Amikacina 500 mg/2ml"},
    { nombre: "Amikacina 100 mg / 2 ml"},
    { nombre: "Atropina sulfato 1 mg / 1 ml"},
    { nombre: "Betametasona 4 mg / ml"},
    { nombre: "Bromuro de Rocuronio 50 mg / 5ml"},
    { nombre: "Bupivacaína clorhidrato 50 mg / 10ml"},
    { nombre: "Ceftriaxona sódica 1g" },
    { nombre: "Cefalotina 1 g" },
    { nombre: "Cefepime 1 g" },
    { nombre: "Ciprofloxacina 200 mg / 100 ml"},
    { nombre: "Clindamicina USP 600 mg / 4 ml" },
    { nombre: "Clorfeniramina maleato 10 mg / 1 ml" },
    {
      nombre:
        "Clorhidrato de Bupivacaína 15 mg + Dextrosa anhidra 240 mg / 3 ml (Bupiglass Hiperbara)"
    },
    { nombre: "Complejo B vitamina 2 ml" },
    { nombre: "Complejo multivitamínico Mabivit I.V"},
    { nombre: "Dexametasona fosfato 4 mg/ 1 ml" },
    { nombre: "Dexametasona 8 mg" },
    { nombre: "Diclofenac potásico 75 mg / 3 ml / I.M (Biofenap)"},
    { nombre: "Diclofenac sódico 75 mg / 3ml (Diclopil)"},
    { nombre: "Efedrina sulfato 6% 1 ml", uso: "I.V / I.M / Subcutánea" },
    { nombre: "Enoxoparina 60 mg / 0.6ml"},
    { nombre: "Esomeprazol 40 mg"},
    { nombre: "Fenitoína sódica 250 mg / 5 ml"},
    { nombre: "Fitomenadiona (Vit K) 10 mg / 1 ml"},
    { nombre: "Fluconazol inyección USP 200 mg / 100 ml / I.V"},
    { nombre: "Furosemida 20 mg/2ml inyección"},
    { nombre: "Gentamicina 40 mg / 2 ml" },
    { nombre: "Hidrocortisona 100 mg" },
    { nombre: "Hidrocortisona 500 mg" },
    { nombre: "Ketoprofeno 100 mg / 1ml", uso: "I.M" },
  ];

  const dividirNumerosExtraidos = (numeros) => {
    if (numeros.length < 2) {
      console.log(
        "Se necesitan al menos dos números para dividir, dividiendo por 1 por defecto."
      );
      return numeros.length === 1 ? numeros[0] : 1;
    }
    
    const resultado = numeros.reduce((total, numero, index) => {
      if (index === 0) {
        return numero;
      }
      return total / numero;
    });
    
    return resultado ;
    };

  const handleSelectMedicamento = (medicamentoSeleccionado) => {
    let numeros = [];
              const regex = /(\d+)/g; // Expresión regular para buscar números en la cadena

              let numerosMatch;
              while ((numerosMatch = regex.exec(medicamentoSeleccionado)) !== null) {
                numeros.push(parseInt(numerosMatch[0])); // Convertir a entero y agregar a la lista
              }
              let numerosExtraidos = [];
              numerosExtraidos = numerosExtraidos.concat(numeros); // Almacenar los números extraídos en una variable
              /* console.log(numerosExtraidos); */

              const  resultadoDivision = dividirNumerosExtraidos(numerosExtraidos);
              /* console.log("Resultado de la división de los números extraídos:", resultadoDivision); */
              setResultadoDivision(resultadoDivision)


    // Realizar otra operación utilizando el resultado de la división
    /* const operacion = medicamentoSeleccionado + resultadoDivision; */

    // Mostrar la operación
    /* console.log("Operación realizada: ", operacion);
    console.log("Resultado de la division: ", resultadoDivision); */
  };

  const calcular = (e) => {
    e.preventDefault();

    

    if (peso === "" || selectedOption === "Seleccione")  {
      toast.error("Por favor llena todos los campos");
    } else {
      const operacion = (peso * 10 / resultadoDivision);
      const redondeo = parseFloat(operacion).toFixed(2)
      setRedondeo(redondeo);
      setResultado(operacion);
      setPeso("");
      setMostrarResultados(true); // Cambias el estado para mostrar el resultado
      /* console.log(resultadoDivision); */
      
    }
  };

/* aqui abajo funcion para dividir los numeros que estan en un string y almacenarlos en una variable*/




  return (
    <div className="bg-gradient-to-br  from-gradient1 to-gradient2 min-h-screen flex flex-col  items-center">
      <header className="flex flex-col items-center mt-10 space-y-3">
        <img src={medicina} width={50} alt="" />
        <h1 className="text-3xl text-result font-semibold">Dosis Pediatrica</h1>
      </header>

      {/* formulario */}

      <div className=" sm:w-[360px] sm:p-3 w-[375px] px-3 h-[400px] ">
        <div className="mt-5">
          <select 
            className="block w-full py-2 outline-1 outline-linea rounded-md text-gray-400"
            id="medicamentos"
            onChange={(e) => handleSelectMedicamento(e.target.value)}
          >
            {
            medicamentos.map((medicina) => {
              return (
                <option key={medicina.nombre} value={medicina.id}>
                  {medicina.nombre}
                </option>
              );
            })}
          </select>
        </div>
          <div className="mt-5">
            <input
              type="number"
              className="py-2 rounded-md outline-1 id=peso name=peso outline-linea w-full px-3 text-1xl"
              value={peso}
              onChange={(e) => setPeso(parseInt(e.target.value))}
              placeholder="Indique el peso"
              onFocus={() => setMostrarResultados(false)}
            />
          </div>
          {/* <div className="mt-5">
            <input
              type="number"
              className="py-2 rounded-md outline-1 id=dosis name=dosis  outline-linea w-full px-3 text-1xl"
              placeholder="Indique la dosis en cc"
              value={dosis}
              onChange={(e) => setDosis(parseInt(e.target.value))}
              onFocus={() => setMostrarResultados(false)}
            />
          </div> */}
          {/* <div className="mt-5">
            <input
              type="text"
              className="py-2 rounded-md outline-1 outline-linea w-full px-3 text-1xl"
              placeholder="20.2"
            />
          </div> */}

          <div className="mt-4">
            {mostrar && (
              <p className="text-2xl text-result font-semibold text-center py-3">
                La dosis es de: {redondeo}ml
              </p>
            )}
            <button
              type="submit"
              className="bg-primary6 rounded-md uppercase py-2 w-full text-texto  hover:bg-gradien_Bottom hover:shadow-xl font-semibold shadow-lg transition-all duration-300"
              onClick={calcular}
            >
              calcular
            </button>
            
          </div>
        
      </div>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer hideProgressBar theme="dark" autoClose={3000} />
    </div>
  );
};

export default App;
