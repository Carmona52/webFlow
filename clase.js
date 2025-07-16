function suma(a, b) {
    return a + b;
}

function esPar(numero) {
    return numero % 2 === 0;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

function obtenerIniciales(nombre) {
    const partes = nombre.split(" ");
    return partes.map(p => p.charAt(0).toUpperCase()).join("");

    //  return partes[0][0] + partes[1][0];
}


function formatearFecha(fecha) {
    const partes = fecha.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function test(desc, fn) {
    try {
        fn();
        console.log(`✅ ${desc}`);
    } catch (error) {
        console.error(`❌ ${desc}: ${error.message}`);
    }
}

function assertEqual(actual, esperado) {
    if (actual !== esperado) {
        throw new Error(`Se esperaba ${esperado} pero se obtuvo ${actual}`);
    }
}


test("suma 2+2 = 4", () => {
    assertEqual(suma(2, 2), 4, "La suma de 2 + 2 debería ser 4");
});


test("suma 4+2 = 6", () => {
    assertEqual(suma(4, 2), 6, "La suma de 4 + 2 debería ser 6");
});

test("suma 0+(-1) = -1", () => {
    assertEqual(suma(0, -1), -1, "La suma de 0 + -1 debería ser -1");
});



test("esPar 4 ", () => {
    assertEqual(esPar(4), true, "4 debería ser par");
});

test("esPar 3 ", () => {
    assertEqual(esPar(3), false, "3 no debería ser inpar");
});


test("esPar 8 ", () => {
    assertEqual(esPar(8), true, "8 debería ser par");
});


test("esPar 5", () => {
    assertEqual(esPar(5), false, "5 debería ser inpar");
});


test("dividir 6/3 = 2", () => {
    assertEqual(dividir(6, 3), 2, "La división de 6 / 3 debería ser 2");
});

test("dividir 6/1 = 6", () => {
    assertEqual(dividir(6, 1), 6, "La división de 6 / 3 debería ser 2");
});


test("dividir 0/3 = No es posible", () => {
    assertEqual(dividir(0, 3), 2, "no es posible dividir por cero");
});


test("obtenerIniciales 'Juan Perez'", () => {
    assertEqual(obtenerIniciales("Juan Perez"), "JP", "Las iniciales de 'Juan Perez' deberían ser 'JP'");
}); 