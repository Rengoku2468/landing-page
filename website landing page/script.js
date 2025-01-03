const canvas = document.getElementById('linegraph');
const ctx = canvas.getContext('2d');
let popchart = new Chart(ctx,{
    type:'line',
    data:{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets:[{
            label:'users per day',
            data:[
                5,3,5,7,36,6,6
            ],
            borderWidth:4,
            borderColor:'orange'
        },   {
            label:'users per day',
            data:[
                2,1,2,8,37,40,50
            ],
            backgroundColor:'black',
            borderWidth:4,
            borderColor:'black'
        }]
    },
    options:{
        maintainAspectRatio : false,
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: { // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 100
          }
        },
        title:{
            display:true,
            text:'User traffic'
        },
        layout:{
         
        }
    }
});
const canvas2 = document.getElementById('piechart');
const ctx2 = canvas2.getContext('2d');
let popchart2 = new Chart(ctx2,{
    type:'doughnut',
    data:{
        labels: ['offline','online','Refunds','Donations'],
        datasets:[{
            label:"2024",
            data:[
                2100,1000,1900,15700
            ],
            backgroundColor:['black','orange','green','yellow'],
            borderWidth:9
        },]
    },
    options:{  maintainAspectRatio : false,
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: { // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 100
          }
        },
        title:{
            display:true,
            text:'User traffic'
        },
        layout:{
         
        }
    }
});
const canvas3 = document.getElementById('barchart');
const ctx3= canvas3.getContext('2d');
let barchart = new Chart(ctx3,{
    type:'bar',
    data:{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets:[{
            label:'users per day',
            data:[
                5,3,5,7,36,6,6
            ],
            backgroundColor:'orange',
            borderWidth:10
        },]
    },
    options:{
        maintainAspectRatio : false,
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: { // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 100
          }
        },
        title:{
            display:true,
            text:'User traffic'
        },
        layout:{
         
        }
    }
});