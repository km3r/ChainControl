/**
 * Strip an officer of all his or her abilities.
 * @param {com.chaincontrol.transactions.nullifyOfficer} tx The sample transaction instance.
 * @transaction
 */
async function reNameCase(tx) {
    tx.officer.disabled = true;
}