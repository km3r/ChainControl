/**
 * Move an officer to a new Precinct
 * @param {com.chaincontrol.transactions.migrateOfficer} tx The sample transaction instance.
 * @transaction
 */

async function migrateOfficer(tx){
    tx.oldPrecinct = tx.officer.employed;
    tx.officer.employed = tx.newPrecinct;
}