import { Building2, ArrowUp } from "lucide-react"
import ApexCharts from 'apexcharts'
import ReactApexChart from 'react-apexcharts';


const options = {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Organic",
        data: [
          { x: "Jan", y: 231 },
          { x: "Fev", y: 122 },
          { x: "Mar", y: 63 },
          { x: "Avr", y: 421 },
          { x: "Mai", y: 122 },
          { x: "Jui", y: 323 },
          { x: "Jul", y: 111 },
          { x: "Oau", y: 111 },
          { x: "Sep", y: 111 },
          { x: "Oct", y: 111 },
          { x: "Nov", y: 111 },
          { x: "Dec", y: 111 },
        ],
      },
      {
        name: "Social media",
        data: [
          { x: "Jan", y: 232 },
          { x: "Fev", y: 113 },
          { x: "Mar", y: 341 },
          { x: "Avr", y: 224 },
          { x: "Mai", y: 522 },
          { x: "Jui", y: 411 },
          { x: "Jul", y: 243 },
          { x: "Oau", y: 243 },
          { x: "Sep", y: 243 },
          { x: "Oct", y: 243 },
          { x: "Nov", y: 243 },
          { x: "Dec", y: 243 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: 320,
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadius: 5,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
};

function CompanyCard() {

    return (
        <>
            
            <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-[#141625] p-4 md:p-6">
                <div class="flex justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex items-center dark:text-white">
                        <div class="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
                            <Building2 size={"18"}/>
                        </div>
                        <div>
                            <h5 class="leading-none text-[1.1em] font-bold text-gray-900 pb-1 dark:text-white">Kadea Software</h5>
                        </div>
                    </div>
                    <div>
                        <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                            <ArrowUp size={"13"} />
                            42.5%
                        </span>
                    </div>
                </div>

                <div className="overflow-x-scroll scrollbar">
                    <div className="w-[30em]">
                        <ReactApexChart options={options} series={options.series} type="bar" height={280} />
                    </div>
                </div>
                
                <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div class="flex justify-between items-center pt-5">
                        <div id="lastDaysdropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            
                        </div>
                        <a
                        href="#"
                        class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                        Details
                        <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>

        </>
  );
}

export default CompanyCard;