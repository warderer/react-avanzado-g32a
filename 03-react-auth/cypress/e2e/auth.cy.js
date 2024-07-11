describe('Funcionalidad de Login', () => {
  it('Mi aplicación carga leyendo Home en /', () => {
    // 01. Arrange: Setup del estado inicial de la aplicación
    cy.visit('/')

    // 02. Act: Interactuar con la aplicación (ejecutar acciones)
    cy.get('h1')
      .contains('Home') // 03. Assert: Verificar que la acción se ejecutó correctamente
  })

  it('Probar el Login como CUSTOMER', () => {
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('login')
    // 01. Arrange
    cy.visit('/login')

    // 02. Act
    cy.get('input[type="email"]').type('drstrange@marvel.com')
    cy.get('input[type="password"]').type('multiverso')

    cy.get('button[type="submit"]').click()
    cy.wait('@login')

    // 03. Assert
    // cy.url().should('include', '/dashboard')
    cy.get('h1').contains('Dashboard')
  })

  it('Cuando haga Logout como ADMIN me debe llevar a la página de Home', () => {
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('login')
    // 01. Arrange
    cy.visit('/login')

    // 02. Act
    cy.get('input[type="email"]').type('superman@dc.com')
    cy.get('input[type="password"]').type('superman')

    cy.get('button[type="submit"]').click()

    cy.wait('@login')

    cy.get('nav > ul li:last').click()
    // 03. Assert
    // cy.url().should('include', '/dashboard')
    cy.get('h1').contains('Home')
  })
})
