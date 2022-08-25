/*------Doughnut chart-----*/
const ctx1 = document.getElementById('mychart1').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
       
        datasets: [{
            label: '# of Votes',
            data: [75,25],
            backgroundColor: [
                'rgba(255,0,0)',
                'rgba(255, 255, 255)',
                
            ],
            borderColor: [
                'rgba(255,0,0)'],

            borderWidth: 1
         }]
    },
    
}); 

const ctx2 = document.getElementById('mychart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
       
        datasets: [{
            label: '# of Votes',
            data: [25,75],
            backgroundColor: [
                'rgba(255,0,0)',
                'rgba(255, 255, 255)',
                
            ],
            borderColor: [
                'rgba(255,0,0)'],

            borderWidth: 1
         }]
    },
    
});

const ctx3 = document.getElementById('mychart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
       
        datasets: [{
            label: '# of Votes',
            data: [75,25],
            backgroundColor: [
                'rgba(255,0,0)',
                'rgba(255, 255, 255)',
                
            ],
            borderColor: [
                'rgba(255,0,0)'],

            borderWidth: 1
         }]
    },
    
});

const ctx4 = document.getElementById('mychart4').getContext('2d');
const myChart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
       
        datasets: [{
            label: '# of Votes',
            data: [50,50],
            backgroundColor: [
                'rgba(255,0,0)',
                'rgba(255, 255, 255)',
                
            ],
            borderColor: [
                'rgba(255,0,0)'],

            borderWidth: 1
         }]
    },
    
});
/*--------Collepse list------*/
        $ (function(){
        $(".collepse a").click(function (e) {
        e.preventDefault();
        if($(this).next("p").is(":hidden")){
          $(".collepse a").removeClass("active");
          $(this).addClass("active");
          $(".collepse p").slideUp();
          $(this).next("p").slideDown();
          }
        });
    });

    $ (function(){
        $("#signup").click(function (e) {
            e.preventDefault();
            $("")
        });
    });

// ---------mob menu--------
    $(function(){
        $(".mob").click(function(){
            $(this).toggleClass("active");
            $(".wrap-1 .flex").slideToggle();
        })
    })