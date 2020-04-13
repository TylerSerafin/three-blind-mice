export const employeeHtmlRepresentation = (employeeObj, computer) => {
  return `
<div class="employee">
    <header class="employee__name">
      <p><h3>${employeeObj.firstName} ${employeeObj.lastName}</h3>${employeeObj.age}</p>
    </header>
    <section class="employee__computer">
    <p>${employeeObj.year}</p>    
    </section>
    <section class="employee__department">
       
    </section>
</div>
`
}
