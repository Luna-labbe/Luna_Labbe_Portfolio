// Bouton retour en haut 
const btn = document.getElementById('backToTop'); 
window.onscroll = function() { 
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) { btn.style.display = "block"; 
} else { 
btn.style.display = "none"; 
} 
}; 
btn.onclick = function() { 
window.scrollTo({ top: 0, behavior: 'smooth' }); 
}; 
document.getElementById("submitQuiz").addEventListener("click", function() { let score = 0; 
for (let i = 1; i <= 6; i++) { 
let answer = document.querySelector(`input[name="q${i}"]:checked`); if (answer) score += parseInt(answer.value); 
} 
let resultText = ""; 
if (score === 6) { 
resultText = "�� Parfait ! Tu me connais par cœur ! ��"; 
} else if (score >= 3) { 
resultText = "�� Pas mal ! Tu commences à bien me connaître !"; } else { 
resultText = "�� Oups… tu veux en apprendre un peu plus sur moi ?"; } 
document.getElementById("result").textContent = resultText; 
}); 
<script> 
const gifts = [ 
"�� Pédagogie : j’aime transmettre, expliquer et accompagner les élèves dans leurs apprentissages.", 
"�� Créativité : je sais proposer des idées originales et ludiques pour apprendre autrement." 
]; 
function showGift(index) { 
document.getElementById("gift-text").textContent = gifts[index]; 
} 
</script> 
const bars = document.querySelectorAll(".progress");
bars.forEach(bar => { 
const level = bar.getAttribute("data-level"); setTimeout(() => { 
bar.style.width = level + "%"; 
}, 300); 
});
