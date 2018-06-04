/**
 * New permission request
 * @param {com.chaincontrol.transactions.newCase} tx The sample transaction instance.
 * @transaction
 */
async function objectPermission(tx){
    if (tx.user.disabled == false) { //inCase vs inPrecinct??
        com.chaincontrol.AddAsset.PermissionRequest;
        tx.PermissionRequest.object = tx.object;
        tx.PermissionRequest.permission = tx.permissionType;
        com.chaincontrol.UpdateAsset.PermissionRequest = 
       // ** update asset to (object)Permission org.hyperle
    }
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
    if(tx.user.disabled == false && ) {
        com.chaincontrol.AddAsset.EvidenceCheckout;
        if(tx.authorized.eAuth.indexOf[evidenceID] < 0){
            tx.EvidenceCheckout.note = 'Unauthorized';
        }
    }
}