/**
 * Rename a case.
 * @param {com.chaincontrol.transactions.ReNameCase} tx The sample transaction instance.
 * @transaction
 */
async function reNameCase(tx) {
    tx.oldName = tx.myCase.name;
    tx.myCase.name = tx.newName;
}