var links = ["file://///buffalo.cs.fiu.edu/homes/Documents/MyCM/Style%20Quiz/question%201/q1.html/q1.html", "document.getElementById('chngMe').src='file://buffalo.cs.fiu.edu/homes/Documents/MyCM/Style%20Quiz/question%202/html/q2.html"];

var linkCount = 0;

function changeFrame() {
    links.length > linkCount && (
        document.getElementsByTagName('iframe')[0].src = links[linkCount++]);
    
    
}

