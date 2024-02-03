
describe('Автотесты для ввода логина и пароля', function () {
   it('Проверка ввода верного логина и пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //ввести верный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввести верный пароль
        cy.get('#loginButton').click(); //нажать "войти"
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); //должна появиться надпись
       cy.get('#messageHeader').should('be.visible'); //надпись должна быть видимой
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //должен быть крестик 
    })

   it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зайти на сайт
        cy.get('#forgotEmailButton').click(); //нажать "забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввести имейл
        cy.get('#restoreEmailButton').click(); // нажать "отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// должна появиться надпись
        cy.get('#messageHeader').should('be.visible');//надпись должна быть видимой
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //должен быть крестик   
    })

it('Проверка ввода не верного пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зайти на сайт
      cy.get('#mail').type('german@dolnikov.ru'); //ввести верный логин
        cy.get('#pass').type('iLoveqastudio19'); //ввести неверный пароль
        cy.get('#loginButton').click(); //нажать "войти"  
        cy.get('#messageHeader').contains('Такого логина или пароля нет');// должна появиться надпись
        cy.get('#messageHeader').should('be.visible');//надпись должна быть видимой
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //должен быть крестик  
    })

it('Проверка ввода не верного логина', function () {
        cy.visit('https://login.qa.studio/'); //Зайти на сайт
      cy.get('#mail').type('german@doзnikov.ru'); //ввести неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввести верный пароль
        cy.get('#loginButton').click(); //нажать "войти"  
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// должна появиться надпись
        cy.get('#messageHeader').should('be.visible');//надпись должна быть видимой
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //должен быть крестик  
    })

it('Проверка ввода не верного логина', function () {
        cy.visit('https://login.qa.studio/'); //Зайти на сайт
      cy.get('#mail').type('germandolnikov.ru'); //ввести неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввести верный пароль
        cy.get('#loginButton').click(); //нажать "войти"  
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// должна появиться надпись
        cy.get('#messageHeader').should('be.visible');//надпись должна быть видимой
        
    })

it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //Зайти на сайт
      cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввести  логин
        cy.get('#pass').type('iLoveqastudio1'); //ввести верный пароль
        cy.get('#loginButton').click(); //нажать "войти"  
        cy.get('#messageHeader').contains('Авторизация прошла успешно');// должна появиться надпись
        cy.get('#messageHeader').should('be.visible');//надпись должна быть видимой
     })
})
