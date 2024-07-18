window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9912","name":"AP_V_CancelDetail","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW AP_V_CancelDetail     \r\nAS    \r\nSELECT cCoVouchType,cCoVouchID,cDwCode,max(Vendor.cVenAbbName) as cDwName,iBVid,iCoClosesID,BalancesGuid,(cCoVouchID+'-'+cDwCode) as Guid@@Dw,  \r\n  sum(iCAmount_f-iDAmount_f) AS iRAmount_f,  \r\n  sum(iCAmount-iDAmount) AS iRAmount  \r\nFROM Ap_Detail AS a WITH (NOLOCK)   \r\ninner join vendor on a.cdwcode=vendor.cvencode   \r\nWHERE iFlag<=2 And cFlag='AP' and cSign='Z'  \r\nGROUP BY cDwCode,cCoVouchType,cCoVouchID,iBVid,iCoClosesID,BalancesGuid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"AP_V_CancelDetail"},{"field":"Type","value":"View"}],"columns":[{"id":"column-164000","object_id":"column-164000","name":"cCoVouchType","name_without_path":"cCoVouchType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164001","object_id":"column-164001","name":"cCoVouchID","name_without_path":"cCoVouchID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164002","object_id":"column-164002","name":"cDwCode","name_without_path":"cDwCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164003","object_id":"column-164003","name":"cDwName","name_without_path":"cDwName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164004","object_id":"column-164004","name":"iBVid","name_without_path":"iBVid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164005","object_id":"column-164005","name":"iCoClosesID","name_without_path":"iCoClosesID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164006","object_id":"column-164006","name":"BalancesGuid","name_without_path":"BalancesGuid","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164007","object_id":"column-164007","name":"Guid@@Dw","name_without_path":"Guid@@Dw","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"51","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164008","object_id":"column-164008","name":"iRAmount_f","name_without_path":"iRAmount_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164009","object_id":"column-164009","name":"iRAmount","name_without_path":"iRAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};