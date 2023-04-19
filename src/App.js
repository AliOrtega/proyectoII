
import './App.css';

const acuerdosconelclientedata = [
  { name: "1 sprint"},
  { name: "1 sprint"},
  { name: "1 sprint"},
  { name: "1 sprint"},
]

const interfazdata = [
  { name: "2 sprint"},
  { name: "2 sprint"},
  { name: "2 sprint"},
  { name: "2 sprint"},
]

const uxuidata = [
  { name: "3 sprint"},
  { name: "3 sprint"},
  { name: "3 sprint"},
  { name: "3 sprint"},
]

const analisisinicialdelospuestosdetrabajodata = [
  { name: "Sprint planning- sprint 1 Planificación"},
  { name: "Sprint planning- sprint 2 Desarrollo de perfil"},
  { name: "Sprint planning- sprint 3 Interacciones"},
  { name: "Sprint planning- sprint 4 Accesos"},
]

const pruebasdata = [
  { name: "1 Planificación-60 horas dimensión/esfuerzo"},
  { name: "2 Desarrollo-50 horas dimensión/esfuerzo"},
  { name: "3 Interacciones-40 horas dimension7esfuerzo"},
  { name: "4 Recursos accesos- 40 horas"},
]

function App() {
  return (
    <div className="App">
      <h2>Calendarización</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha inicio</th>
            <th>Sprint id</th>
            <th>Fecha final</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>13 de febrero del 2023</td>
          {
            acuerdosconelclientedata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
          <td>12 de marzo 2023</td>
        </tr>
        <tr>
          <td>13 marzo 2023</td>
          {
            interfazdata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
          <td>9 de abril 2023</td>
        </tr>
        <tr>
          <td>10 abril 2023</td>
          {
            uxuidata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
          <td>5 mayo 2023</td>
        </tr>
        <tr>
          {
            analisisinicialdelospuestosdetrabajodata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
        </tr>
        <tr>
          {
            pruebasdata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
        </tr>
        </tbody>
      </table>
      <h2>Sprint scheduled</h2>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Requerimiento/Tarea</th>
          <th>Responsable</th>
          <th>Estado</th>
          <th>Estimación de esfuerzo</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1. Acuerdos con el cliente</td>
          {
            acuerdosconelclientedata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
          <td>Alicia Ortega</td>
          <td>Terminado</td>
          <td>8 horas</td>
        </tr>
        <tr>
          <td>2. Interfaz</td>
          {
            interfazdata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
          <td>Julia Rodríguez</td>
          <td>En curso</td>
          <td>80 horas</td>
        </tr>
        <tr>
          <td>3. UX/UI</td>
          {
            uxuidata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
          <td>José Rentería</td>
          <td>En curso</td>
          <td>60 horas</td>
        </tr>
        <tr>
          <td>4. Análisis inicial de los puestos de trabajo</td>
          {
            analisisinicialdelospuestosdetrabajodata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
          <td>Carlos Marques</td>
          <td>En curso</td>
          <td>40 horas</td>
        </tr>
        <tr>
          <td>5. Pruebas</td>
          {
            pruebasdata.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                </tr>
              )
            })
          }
          <td>Lucia Suarez</td>
          <td>Pendiente</td>
          <td>20 horas</td>
        </tr>
        </tbody>
      </table>
    </div>    
  );
}

export default App;

