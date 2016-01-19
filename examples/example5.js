if (true) {
    console.log(typeof definedVariable); // ReferenceError (TDZ)
    console.log(typeof undefinedVariable); //undefined - this variable is not defined
    let definedVariable;
}
