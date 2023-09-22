/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

import commum_page_page from '../support/pages/commum_page'
import login_page from '../support/pages/login_page'

describe('Login', () => {

    beforeEach('Acessar tela de login', () => {
        commum_page_page.acessarLogin()
    })

    it('Campo E-mail vazio', () => {
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Campo E-mail inválido', () => {
        login_page.preencheEmail(faker.person.fullName())
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Campo senha vazio', () => {
        login_page.preencheEmail(faker.internet.email())
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it('Campo senha inválido', () => {
        login_page.preencheEmail(faker.internet.email())
        login_page.preencheSenha('123')
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it('Login com sucesso', () => {

        const email = faker.internet.email()

        login_page.preencheEmail(email)
        login_page.preencheSenha('123456')
        login_page.clicarLogin()
        login_page.validarMensagemSucesso(email)
    })

    it('Login com sucesso e marcando lembrar de mim', () => {

        const email = faker.internet.email()

        login_page.preencheEmail(email)
        login_page.preencheSenha('123456')
        login_page.marcarCheckbox()
        login_page.clicarLogin()
        login_page.validarMensagemSucesso(email)
    })
})