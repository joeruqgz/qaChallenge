Feature: Register page

    La pagina de registro funcionara segun las credenciales validas.

    Background:
        Given Se ingresa a la pagina de registro

    Scenario: Registro exitoso con correo válido y contraseña válida (5 caracteres)
        When ingreso el correo "test@test.com", la clave "abcde", y hago click en el boton register
        Then se muestra mensaje correcto de registro "SAVED"
    
    Scenario: Registro exitoso con correo válido y contraseña válida (mas de 5 caracteres)
        When ingreso el correo "test@test.com", la clave "abcdef", y hago click en el boton register
        Then se muestra mensaje correcto de registro "SAVED"

    Scenario: Registro fallido con correo inválido (sin @) y contraseña válida
        When ingreso el correo "testtest.com", la clave "abcdefg", y hago click en el boton register
        Then se muestra mensaje error de registro "INVALID"
    
    Scenario: Registro fallido con correo válido y contraseña corta
        When ingreso el correo "test@test.com", la clave "abc", y hago click en el boton register
        Then se muestra mensaje error de registro "INVALID"

    Scenario: Registro fallido con campos vacios
        When no ingreso el correo, ni la clave, y hago click en el boton register
        Then se muestra mensaje error de registro campos vacios "REQUIRED"
 
    Scenario: Registro fallido con correo vacio
        When no ingreso el correo, la clave "abcdefg", y hago click en el boton register
        Then se muestra mensaje error de registro campos vacios "REQUIRED"
    
    Scenario: Registro fallido con contraseña vacia
        When ingreso el correo "test@test.com", no la clave, y hago click en el boton register
        Then se muestra mensaje error de registro campos vacios "REQUIRED"