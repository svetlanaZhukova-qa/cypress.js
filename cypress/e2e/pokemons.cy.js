describe('Автотест на покупку нового аватара для тренера', function () {
   it('Проверка функционала покупки нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');//зайти на сайт 
        cy.get(':nth-child(1) > .auth__input').type('tmn.supply@yandex.ru'); //ввести логин
        cy.get('#password').type('Demid030616');// ввести пароль
        cy.get('.auth__button').click(); //нажать "войти" 
        cy.get('.header__btns > [href="/shop"]').click(); //нажать на "магазин"
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();//выбрать аватар и нажать "купить"
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
    })
})

