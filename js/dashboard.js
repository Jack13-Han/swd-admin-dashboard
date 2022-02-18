

$(".counter").counterUp({
    delay: 10,
    time: 1000
});




let dateArr =['Jul 12','Jul 14','Jul 29','Jul 2','Jul 9','Jul 11','Jul 5','Jul 20','Jul 31','Jul 1'];
let orderCountArr = [0,8,5,4,5,7,9,5,4,3,2];
let viewCountArr  = [0,12,8,10,12,8,13,6,8,5,11];



var ctx = document.getElementById('ov');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [
            {
                label: 'Order Count &',
                data: orderCountArr,
                backgroundColor: [
                   ' #dc354530'
                ],
                borderColor: [
                    '#dc3545'
                ],
                borderWidth: 1,
                tension:0
            },
            {
                label: 'Viewer',
                data: viewCountArr,
                backgroundColor: [
                   ' #d6338430'
                ],
                borderColor: [
                    '#d63384'
                ],
                borderWidth: 1,
                tension:0
            }
        ]
    },
    options: {
        scales: {

            y: {
                beginAtZero: true
            },
            yAxes:[
                {
                    display: false,
                }
            ],


            xAxes: [{
                display: false,
                gridLines : [{
                    display: false
                }]
            }],

            
        },
        legend: {
            display: true,
          position: 'top',
            labels: {
                fontColor: '#112845',
                usePointStyle: true,

            }
        },
        
    }
});


let orderFormPlace =[5,15,5,9,3,8];
let place = ['YGN','MDY','NPW','SHAM','MGY','AYA'];




var op = document.getElementById('op').getContext('2d');
var opChart = new Chart(op, {
    type: 'doughnut',
    data: {
        labels: place,
        datasets: [{
            label: '# of Votes',
            data: orderFormPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                display: false,
                beginAtZero: true
            }
        },


        legend: {
            display: true,
          position: 'bottom',
            labels: {
                fontColor: '#112845',
                usePointStyle: true,

            }
        },
        
    
    }
});