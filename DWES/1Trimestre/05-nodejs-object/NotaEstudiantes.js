const estudiante = ([
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] }
  ]);

function getStudentsWithNamesAndTopNotes(estudiante) {
	return estudiante.map(({name, notes}) => ({name, notaMax: Math.max(0,... notes)}));
}
console.log(getStudentsWithNamesAndTopNotes(estudiante));