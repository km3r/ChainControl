/**
 * New permission request
 * @param {com.chaincontrol.transactions.newCase} tx The sample transaction instance.
 * @transaction
 */
async function objectPermission(tx){
    com.chaincontrol.AddAsset.PermissionRequest;
   // ** update asset to (object)Permission org.hyperle
}

/**
 * Request to check out physical evidence
 * @param {com.chaincontrol.transactions.newCase} tx The sample transaction instance.
 * @transaction
 */
async function physicalCheckoutRequest(tx){
    if(tx.user.disabled == false) {
        com.chaincontrol.AddAsset.EvidenceCheckout;
        if(tx.authorized.eAuth.indexOf[evidenceID] < 0){
            tx.EvidenceCheckout.note = 'Unauthorized';
        }
    }
}

/**
 * Update physical checkout request (approve, withdrawn, or returned)
 * @param {com.chaincontrol.transactions.newCase} tx The sample transaction instance.
 * @transaction
 */
async function physicalCheckoutUpdate(tx){
    com.chaincontrol.AddAsset.EvidenceCheckout;
}