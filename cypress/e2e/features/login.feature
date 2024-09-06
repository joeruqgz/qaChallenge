Feature: Login page

    La pagina de login funcionara segun las credenciales validas.

    Background:
        Given Se ingresa a la pagina de login

    Scenario: Inicio de sesion exitoso con correo y contraseña validos
        When ingreso el correo "test@test.com", la clave "abcdefg", y hago click en el boton login
        Then se muestra mensaje correcto "LOGIN VALID"
##
    Scenario: Login fallido con correo inválido (sin @) y contraseña válida
        When ingreso el correo "testtest.com", la clave "abcdefg", y hago click en el boton login
        Then se muestra mensaje error "INVALID"

    Scenario: Login fallido con contraseña corta
        When ingreso el correo "test@test.com", la clave "abc", y hago click en el boton login
        Then se muestra mensaje error "INVALID"
    
    Scenario: Login fallido con correo vacío
        When no ingreso el correo , la clave "abcdefg" , y hago click en el boton login
        Then se muestra mensaje error campos obligatorios "REQUIRED"
    
    Scenario: Login fallido con contraseña vacía
        When ingreso el correo "testtest.com" , no clave , y hago click en el boton login
        Then se muestra mensaje error campos obligatorios "REQUIRED"



    