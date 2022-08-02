var cp = "Followers";
var codcp = ['1,500','1,500','3,000','6,000','3,000','10,000','3,000','1,500','6,000','1,500'];	
var names = ['smasher','xoxo0232','George', 'Smith', 'Sophia', 'Susan','amiraX5','hindo02','kittyparty','Harry','Emily','Joe','Samantha','Lauren','Thomas','David','Robert','Jack','Charlie','Jacob','Alejandra','William','Amanda', 'Mark', 'Amelia', 'Kaylee', 'Michael', 'James', 'Olivia', 'Elizabeth', 'Connor', 'Victoria', 'Linda', 'Brown' ,'Ethan', 'Kyle', 'William', 'Oliver'];	
function create() {
VanillaToasts.create({
  title: document.body.valueToUse = names[Math.floor(Math.random() * names.length)] || null,
  text: document.body.valueToUse = codcp[Math.floor(Math.random() * codcp.length)] + cp,
  type: 'success',
  icon: 'img/person.jpg',
  timeout: 2500,
});
setTimeout(create, 6000)
}