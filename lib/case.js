/**
 * Rename a case.
 * @param {com.chaincontrol.transactions.ReNameCase} tx The sample transaction instance.
 * @transaction
 */
async function reNameCase(tx) {
    tx.oldName = tx.myCase.name;
    tx.myCase.name = tx.newName;
}
/**
 * Close a case.
 * @param {com.chaincontrol.transactions.closeCase} tx The sample transaction instance.
 * @transaction
 */
async function closeCase(tx) {
    tx.caseID.open = false;
}

/**
 * Add new case
 * @param {com.chaincontrol.transactions.newCase} tx The sample transaction instance.
 * @transaction
 */
async function newCase(tx){
    if (tx.Officer.disabled == false && tx.authorized.pAuth.indexOf(inPrecinct) >= 0) { //inCase vs inPrecinct??
        com.chaincontrol.AddAsset.Case
    }
}