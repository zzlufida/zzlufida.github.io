window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10057","name":"Caq_Amoct_LfProduct_fx","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View Caq_Amoct_LfProduct_fx\r\nAs\r\n\tSelect A.iPeriod,A.cPPid,A.cBatch,A.productType,A.cAmoType,A.cAmoID,A.ifxdid,\r\n\t\tA.iQua,A.iTotalAmo,A.iTotalAmo/B.iFinQua iFinPdtUnitAmo,B.iFinQua from   \r\n\t(  \r\n\t\tSelect iPeriod,cPPid,cBatch,ProductType,cAmoType,cAmoID,ifxdid,\r\n\t\t\tSum(iQua) iQua,Sum(iTotalAmo) iTotalAmo from Ca_Amoct_LFProduct_fx  \r\n\t\tGroup by iPeriod,cPPid,cBatch,ProductType,cAmoType,cAmoID,ifxdid  \r\n\t) A   \r\n\tinner join   \r\n\t(  \r\n\t\tSelect iPeriod,cPPid,cBatch,Sum(iFinQua) iFinQua from   \r\n\t\t(  \r\n\t\t\tSelect iPeriod,cPPid,cBatch,zID,zBatch,Max(iFinQua) iFinQua from Ca_Amoct_LFProduct\r\n\t\t\tGroup by iPeriod,cPPid,cBatch,zID,zBatch  \r\n\t\t) T  \r\n\t\tGroup by iPeriod,cPPid,cBatch   \r\n\t) B on A.iPeriod = B.iPeriod and A.cPPid = B.cPPid and A.cBatch = B.cbatch","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Caq_Amoct_LfProduct_fx"},{"field":"Type","value":"View"}],"columns":[{"id":"column-173375","object_id":"column-173375","name":"iPeriod","name_without_path":"iPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173376","object_id":"column-173376","name":"cPPid","name_without_path":"cPPid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173377","object_id":"column-173377","name":"cBatch","name_without_path":"cBatch","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173378","object_id":"column-173378","name":"productType","name_without_path":"productType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173379","object_id":"column-173379","name":"cAmoType","name_without_path":"cAmoType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173380","object_id":"column-173380","name":"cAmoID","name_without_path":"cAmoID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173381","object_id":"column-173381","name":"ifxdid","name_without_path":"ifxdid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173382","object_id":"column-173382","name":"iQua","name_without_path":"iQua","description":null,"is_pk":false,"is_identity":false,"data_type":"ia_decimal: decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173383","object_id":"column-173383","name":"iTotalAmo","name_without_path":"iTotalAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"ia_decimal: decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173384","object_id":"column-173384","name":"iFinPdtUnitAmo","name_without_path":"iFinPdtUnitAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173385","object_id":"column-173385","name":"iFinQua","name_without_path":"iFinQua","description":null,"is_pk":false,"is_identity":false,"data_type":"ia_decimal: decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};