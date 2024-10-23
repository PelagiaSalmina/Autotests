import * as data from "../helpers/default_data.json"
import * as message from "../helpers/messeges.json"
import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"

describe('Авторизация', function () {

     beforeEach('Перед', function () {
          cy.visit('/');
     });

     afterEach('После', function () {
          cy.get(result_page.title).should('be.visible');
          cy.get(result_page.close).should('be.visible');
     });

    it('1 Позитивный кейс', function () {
         cy.get(main_page.email).type(data.login);
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains(message.success);
     })

    it('2 Забыли пароль', function () {
         cy.get(main_page.fogot_pass_btn).click();
         cy.get(recovery_password_page.title).contains('Восстановите пароль');
         cy.get(recovery_password_page.email).type(data.login);
         cy.get(recovery_password_page.send_button).click();
         cy.get(result_page.title).contains(message.recovery);
    })

    it('3 Неверный пароль', function () {
         cy.get(main_page.email).type(data.login);
         cy.get(main_page.password).type('wrongpassword1');
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains(message.failure);
   })

   it('4 Неверный логин', function () {
         cy.get(main_page.email).type('german@d.ru');
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains(message.failure);
    })

    it('5 Невалидная почта - без @', function () {
         cy.get(main_page.email).type('germandolnikov.ru');
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains(message.validation);
   })

   it('6 Приведение логина к нижнему регистру', function () {
         cy.get(main_page.email).type('GerMan@Dolnikov.ru');
         cy.get(main_page.password).type(data.password);
         cy.get(main_page.login_button).click();
         cy.get(result_page.title).contains(message.success);
    })
 }) 