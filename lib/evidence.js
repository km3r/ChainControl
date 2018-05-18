/**
 * Add new evidence
 * @param {com.chaincontrol.transactions.newEvidence} tx The sample transaction instance.
 * @transaction
 */

async function newEvidence(tx){
    if (tx.inCase.open == true && tx.authorized.cAuth.indexOf(inCase) >= 0) {
        com.chaincontrol.addAsset.Evidence
    }
}