/**
 * Strip an officer of all his or her abilities.
 * @param {com.chaincontrol.transactions.nullifyOfficer} tx The sample transaction instance.
 * @transaction
 */
async function nullifyOfficer(tx) {
    tx.officer.disabled = true;
}

/**
 * Migrate an officer to a new employment precinct.
 * @param {com.chaincontrol.transactions.migrateOfficer} tx The sample transaction instance.
 * @transaction
 */
async function migrateOfficer(tx){
    tx.oldPrecinct = tx.officer.employed;
    tx.officer.employed = tx.newPrecinct;
    tx.officer.pAuth.push(newPrecinct);
    var index = tx.officer.pAuth.indexOf(tx.oldPrecinct);
    tx.officer.pAuth.splice(index,1);
}