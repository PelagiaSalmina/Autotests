describe('Покупка аватара', function () {

    it('e-2-e', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get(':nth-child(1) > .auth__input').type('pelagia.salmina@yandex.ru');
         cy.get('#password').type('vXW-6U3-VG2-6Cr');
         cy.get('.auth__button').click();
         cy.get('.header__container > .header__id').click();
         cy.get('[href="/shop"]').click();
         cy.get('.available > button')
           .then($options => {
            const count = $options.length
            const randomIndex = Math.floor(Math.random() * count)
            const randomOption = $options.eq(randomIndex) 
            cy.get(randomOption).click()
           })
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('0529');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('David Martinez');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');


     })
 }) 