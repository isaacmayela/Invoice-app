import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
  },
  colors: ['#3C50E0', '#6577F3', '#8FD0EF'],
  labels: ['Payée', 'En cours', 'En projet'],
  legend: {
    show: false,
    position: 'bottom',
  },

  plotOptions: {
    pie: {
      donut: {
        size: '55%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 300,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree = () => {
  const [state, setState] = useState({
    series: [54, 27, 19],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [54, 27, 19],
    }));
  };
  handleReset;

  return (
    <div className="sm:px-7.5 rounded-md bg-white px-5 pb-5 pt-[1em] shadow-default dark:bg-[#141625]">
        <div className="mb-3 justify-between gap-4 sm:flex">
            <div>
                <h5 className="text-xl font-semibold text-gray-500 dark:text-gray-200">
                    Factures
                </h5>
            </div>
        </div>

        <div className="mb-2">
            <div id="chartThree" className="mx-auto flex justify-center">
            <ReactApexChart
                options={options}
                series={state.series}
                type="donut"
            />
            </div>
        </div>

        <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
            <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                    <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
                    <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                    <span> Desktop </span>
                    <span> 65% </span>
                    </p>
                </div>
            </div>
            <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                    <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
                    <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                    <span> Tablet </span>
                    <span> 34% </span>
                    </p>
                </div>
            </div>
            <div className="sm:w-1/2 w-full px-8">
                <div className="flex w-full items-center">
                    <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
                    <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                    <span> Mobile </span>
                    <span> 45% </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ChartThree;