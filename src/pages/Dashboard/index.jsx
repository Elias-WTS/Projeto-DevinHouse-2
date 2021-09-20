import {Bar, Line} from 'react-chartjs-2';

const GraphOne = () => {
  const data = {
    labels: ['Zapelino', 'Oi', 'BRB', 'BRB Nação'],
    datasets: [
      {
        label: 'Quantidade de contas abertas',
        data: [2400, 1300, 520, 1000],
        fill: false,
        backgroundColor: [
          'rgba(0, 0, 200, 1)',
          'rgba(180, 180, 0, 1)',
          'rgba(100, 100, 220, 1)',
          'rgba(120, 0, 50, 1)',
        ],
        borderColor: [
          'rgba(0, 0, 140, 1)',
          'rgba(0, 120, 0, 1)',
          'rgba(0, 100, 220, 1)',
          'rgba(120, 0, 50, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Contas abertas - BOT',
      },
    },
  };

  return (
    <>
      <div style={{backgroundColor: 'white', padding: '10px', borderRadius: '5px'}}>
        <Bar
          data={data}
          height={300}
          options={options}
        />
      </div>
    </>
  )
}
const GraphTwo = () => {
  const data = {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
    datasets: [
      {
        label: 'Quantidade de transações PIX',
        data: [
          2400, 1300, 520, 1000,
          3400, 300, 3520, 900,
          4400, 2300, 1520, 700,
          5400, 1300, 7520, 3000
        ],
        fill: false,
        backgroundColor: [
          'rgba(120, 0, 50, 1)',
        ],
        borderColor: [
          'rgba(120, 0, 50, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    indexAxis: 'x',
    maintainAspectRatio: false,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <>
      <div style={{backgroundColor: 'white', padding: '10px', borderRadius: '5px'}}>
        <Line
          data={data}
          height={300}
          options={options}
        />
      </div>
    </>
  )
}

const Dashboard = () => {
  
  return (
    <>
      <div style={{backgroundColor: 'gray', padding: '10px', borderRadius: '23px'}}>
        <GraphOne />
        <hr />
        <GraphTwo />
      </div>
    </>
  )
}

export default Dashboard;